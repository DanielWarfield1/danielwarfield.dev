<template>
  <canvas ref="canvasRef" class="three-canvas" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const canvasRef = ref(null)

let renderer, scene, camera, animId
let nodePoints, edgeLines, networkGroup
let nodeData    = []
let edgeIndices = []
const NODE_COUNT   = 260
const SPREAD_XY    = 62
const SPREAD_Z     = 38
const CONNECT_DIST = 13
const MAX_CONN     = 6

// Muted palette — very pale blue-grey, barely tinted
const colFar  = new THREE.Color('#1a1d2e')
const colNear = new THREE.Color('#2e3352')
const tmpCol  = new THREE.Color()


function init(canvas) {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  scene  = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.set(0, 0, 50)

  networkGroup = new THREE.Group()
  scene.add(networkGroup)

  // ── Nodes ────────────────────────────────────────────────────────────────
  for (let i = 0; i < NODE_COUNT; i++) {
    // Gaussian-ish clustering: mix uniform with a tighter inner cloud
    const outer = Math.random() > 0.35
    const r = outer ? 1.0 : 0.45
    nodeData.push({
      bx: (Math.random() - 0.5) * SPREAD_XY * 2 * r,
      by: (Math.random() - 0.5) * SPREAD_XY * 1.2 * r,
      bz: (Math.random() - 0.5) * SPREAD_Z  * 2,
      phase: Math.random() * Math.PI * 2,
      freq:  0.10 + Math.random() * 0.18,
      amp:   0.25 + Math.random() * 0.65,
    })
  }

  // ── Edges ────────────────────────────────────────────────────────────────
  const connCount = new Array(NODE_COUNT).fill(0)
  for (let i = 0; i < NODE_COUNT; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      if (connCount[i] >= MAX_CONN || connCount[j] >= MAX_CONN) continue
      const a = nodeData[i], b = nodeData[j]
      const dx = a.bx - b.bx, dy = a.by - b.by, dz = a.bz - b.bz
      if (Math.sqrt(dx*dx + dy*dy + dz*dz) < CONNECT_DIST) {
        edgeIndices.push(i, j)
        connCount[i]++
        connCount[j]++
      }
    }
  }

  // ── Geometry ─────────────────────────────────────────────────────────────
  const nodeGeo = new THREE.BufferGeometry()
  nodeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NODE_COUNT * 3), 3))
  nodeGeo.setAttribute('color',    new THREE.BufferAttribute(new Float32Array(NODE_COUNT * 3), 3))

  nodePoints = new THREE.Points(nodeGeo, new THREE.PointsMaterial({
    size: 0.55,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  }))
  networkGroup.add(nodePoints)

  const edgeGeo = new THREE.BufferGeometry()
  edgeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edgeIndices.length * 3), 3))
  edgeGeo.setAttribute('color',    new THREE.BufferAttribute(new Float32Array(edgeIndices.length * 3), 3))

  edgeLines = new THREE.LineSegments(edgeGeo, new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.18,
  }))
  networkGroup.add(edgeLines)
}

function nodePos(n, t) {
  return {
    x: n.bx + Math.sin(t * n.freq + n.phase)              * n.amp,
    y: n.by + Math.cos(t * n.freq * 0.68 + n.phase * 1.4) * n.amp * 0.8,
    z: n.bz + Math.sin(t * n.freq * 0.45 + n.phase * 0.9) * n.amp * 0.55,
  }
}

function animate() {
  animId = requestAnimationFrame(animate)
  const t = Date.now() * 0.001

  // Slow ambient rotation — sense of slow drift through space
  networkGroup.rotation.y = t * 0.022
  networkGroup.rotation.x = Math.sin(t * 0.014) * 0.09

  // ── Write nodes ──────────────────────────────────────────────────────────
  const nPos = nodePoints.geometry.getAttribute('position')
  const nCol = nodePoints.geometry.getAttribute('color')

  for (let i = 0; i < NODE_COUNT; i++) {
    const n = nodeData[i]
    const p = nodePos(n, t)
    nPos.setXYZ(i, p.x, p.y, p.z)

    // Depth cue: nodes at positive z are closer → slightly brighter
    const depthT = Math.max(0, Math.min(1, (p.z + SPREAD_Z) / (SPREAD_Z * 2)))
    tmpCol.copy(colFar).lerp(colNear, depthT)
    nCol.setXYZ(i, tmpCol.r, tmpCol.g, tmpCol.b)
  }
  nPos.needsUpdate = true
  nCol.needsUpdate = true

  // ── Write edges ──────────────────────────────────────────────────────────
  const ePos = edgeLines.geometry.getAttribute('position')
  const eCol = edgeLines.geometry.getAttribute('color')

  for (let k = 0; k < edgeIndices.length; k++) {
    const ni = edgeIndices[k]
    const n  = nodeData[ni]
    const p  = nodePos(n, t)
    ePos.setXYZ(k, p.x, p.y, p.z)
    eCol.setXYZ(k, nCol.getX(ni) * 0.6, nCol.getY(ni) * 0.6, nCol.getZ(ni) * 0.6)
  }
  ePos.needsUpdate = true
  eCol.needsUpdate = true

  renderer.render(scene, camera)
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  init(canvasRef.value)
  animate()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animId)
  renderer.dispose()
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.three-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>

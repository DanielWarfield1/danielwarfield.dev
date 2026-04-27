<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">DW</a>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
<a href="#contact" class="btn btn-primary nav-cta">Hire Me</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const links = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#content',    label: 'Content' },
  { href: '#contact',    label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 2rem;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(9, 9, 15, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-color: var(--border);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  color: var(--text);
  transition: opacity 0.2s;
}
.nav-logo:hover { opacity: 0.8; }

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.25rem;
  margin-left: auto;
}

.nav-links a {
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--muted);
  transition: color 0.2s, background 0.2s;
}
.nav-links a:hover {
  color: var(--text);
  background: var(--surface);
}

.nav-cta {
  padding: 0.55rem 1.25rem;
  font-size: 0.875rem;
}
</style>

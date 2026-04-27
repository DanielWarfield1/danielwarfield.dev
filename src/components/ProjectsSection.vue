<template>
  <section id="projects">
    <div class="section">
      <p class="section-label">Selected Work</p>
      <h2 class="section-title">Things I've Built</h2>
      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="glass-card project-card"
          :style="{ '--accent-color': project.color }"
        >
          <div class="project-top">
            <div class="project-icon">{{ project.icon }}</div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" aria-label="Live demo">
                <ExternalIcon />
              </a>
            </div>
          </div>
          <div class="project-meta">{{ project.org }}</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const GithubIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: 18, height: 18 }, [
    h('path', { d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' })
  ])
})

const ExternalIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, width: 16, height: 16 }, [
    h('path', { d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' }),
    h('polyline', { points: '15 3 21 3 21 9' }),
    h('line', { x1: 10, y1: 14, x2: 21, y2: 3 })
  ])
})

const projects = [
  {
    icon: '🔍',
    title: 'FraudX',
    org: 'Eyelevel.ai · 2025',
    description: 'AI-powered fraud investigation platform built from zero, processing 8,000+ claims and generating $500k+ revenue. Features agentic pipelines for entity recognition, relationship extraction, and multi-step reasoning.',
    tags: ['LangGraph', 'RAG', 'FastAPI', 'Vue.js', 'Docker'],
    color: '#6366f1',
    github: null,
    demo: null,
  },
  {
    icon: '📡',
    title: 'LLM Observability & Evaluation',
    org: 'Eyelevel.ai · 2025',
    description: 'RAG + LLM-powered span-level attribution system with source linking, enabling customer-facing validation. Reduced model evaluation time by 20x.',
    tags: ['RAG', 'PyTorch', 'LangChain', 'Python', 'Anthropic API'],
    color: '#06b6d4',
    github: null,
    demo: null,
  },
  {
    icon: '🕸️',
    title: 'Entity Canonicalization Engine',
    org: 'Eyelevel.ai · 2025',
    description: 'Custom GATv2-style graph neural network for entity canonicalization in insurance claims, achieving over 100x speedup in claim processing for some case types.',
    tags: ['PyTorch', 'Graph Neural Networks', 'Python', 'CUDA'],
    color: '#8b5cf6',
    github: null,
    demo: null,
  },
  {
    icon: '✍️',
    title: 'Intuitively and Exhaustively Explained',
    org: 'Independent · 2023–Present',
    description: 'Technical writing and teaching publication covering NLP, computer vision, agentic design, and RAG — followed by 20k+ engineers, professors, investors, and students worldwide.',
    tags: ['NLP', 'CV', 'RAG', 'Agentic AI', 'Technical Writing'],
    color: '#10b981',
    github: null,
    demo: '#',
  },
  {
    icon: '🏥',
    title: 'OK2StandUP',
    org: 'Co-Founder · 2019–2024',
    description: 'Healthcare AI platform for fall-risk detection in skilled nursing facilities. Built time-series activity classification models to >95% accuracy, enabling $1M+ in funding and pilots with major facilities.',
    tags: ['PyTorch', 'Time-Series', 'MLOps', 'Android', 'Firebase'],
    color: '#f59e0b',
    github: null,
    demo: null,
  },
  {
    icon: '📦',
    title: 'Open-Source AI Tooling',
    org: 'Eyelevel.ai · 2023–2024',
    description: 'Python libraries and Kubernetes-native applications that accelerated platform adoption with enterprise partners including Red Hat, Apple, Samsung, AWS, and Intel.',
    tags: ['Python', 'Kubernetes', 'Helm', 'Open Source'],
    color: '#ef4444',
    github: '#',
    demo: null,
  },
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.project-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-card:hover {
  box-shadow: 0 0 30px color-mix(in srgb, var(--accent-color) 30%, transparent);
  border-color: color-mix(in srgb, var(--accent-color) 45%, transparent);
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-icon { font-size: 1.8rem; }

.project-links {
  display: flex;
  gap: 0.75rem;
}

.project-links a {
  color: var(--muted);
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.project-links a:hover { color: var(--text); }

.project-meta {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
}

.project-desc {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.65;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.5rem;
}

.project-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  color: var(--muted);
  letter-spacing: 0.03em;
}
</style>

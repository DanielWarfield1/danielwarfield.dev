<template>
  <section id="experience">
    <div class="section">
      <p class="section-label">Work History</p>
      <div class="exp-header">
        <h2 class="section-title">Professional Experience</h2>
      </div>

      <div class="timeline">
        <div v-for="role in roles" :key="role.title + role.org" class="glass-card role-card">
          <div class="role-left">
            <p class="role-period">{{ role.period }}</p>
            <p class="role-org">{{ role.org }}</p>
          </div>
          <div class="role-right">
            <h3 class="role-title">{{ role.title }}</h3>
            <p class="role-summary">{{ role.summary }}</p>
          </div>
        </div>
      </div>

      <div class="resume-cta">
        <p>Resume available upon request.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const roles = [
  {
    period: '2025 – Present',
    org: 'Eyelevel.ai · Austin, TX',
    title: 'Founding AI Engineering Lead',
    summary: 'Built FraudX, an AI-powered fraud investigation platform, end-to-end. Covers agentic pipelines, graph ML, and LLM observability, and is deployed in active production use.',
  },
  {
    period: '2023 – Present',
    org: 'Eyelevel.ai · Austin, TX',
    title: 'Director of AI Engagement',
    summary: 'Created technical content that became the company\'s primary inbound channel, attracting major enterprise organizations and ultimately the company\'s acquirer.',
  },
  {
    period: '2023 – Present',
    org: 'Intuitively & Exhaustively Explained',
    title: 'AI Writer & Teacher',
    summary: 'Independent publication covering LLMs, RAG, computer vision, and agentic systems, reaching 20k+ engineers, researchers, and students worldwide.',
  },
  {
    period: '2019 – 2024',
    org: 'OK2StandUP · Pittsburgh, PA',
    title: 'Co-Founder & Lead Data Scientist',
    summary: 'Built fall-risk detection AI for skilled nursing facilities from concept to production. Models were accurate enough to secure funding and run pilots with major facilities.',
  },
]
</script>

<style scoped>
.exp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.exp-header .section-title { margin-bottom: 0; }

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.role-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1.5rem 2.5rem;
  padding: 1.5rem 2rem;
  align-items: start;
}

@media (max-width: 640px) {
  .role-card { grid-template-columns: 1fr; gap: 0.5rem; }
}

.role-period {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent2);
  letter-spacing: 0.05em;
}

.role-org {
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: 0.2rem;
}

.role-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.role-summary {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.65;
}

.resume-cta {
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.5rem 2rem;
  border: 1px dashed var(--border);
  border-radius: 12px;
}

.resume-cta p {
  color: var(--muted);
  font-size: 0.9rem;
}
</style>

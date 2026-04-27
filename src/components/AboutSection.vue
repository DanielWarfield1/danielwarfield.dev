<template>
  <section id="about">
    <div class="section">
      <div class="about-grid">
        <div class="about-text">
          <h2 class="section-title">Engineer. Manager.<br>Builder.</h2>
          <p class="body-text">
            I'm an applied AI engineer and manager specializing in productionalizing AI
            systems. I've built AI products from the ground up that secured over $1M in
            funding, won competitive enterprise deals, and managed teams in
            revenue-generating deployments in regulated environments.
          </p>
          <p class="body-text">
            I operate at the intersection of engineering, product, and go-to-market strategy,
            turning AI capabilities into systems customers actually trust. I also write
            and teach about AI, reaching a global community of 20k+ engineers,
            researchers, and students.
          </p>
          <div class="about-stats">
            <div v-for="stat in stats" :key="stat.label" class="stat">
              <span class="stat-value gradient-text">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
        <div class="skills-grid">
          <p class="skills-note">A subset of the tools I work with:</p>
          <div v-for="group in skillGroups" :key="group.title" class="glass-card skill-card">
            <div class="skill-icon">{{ group.icon }}</div>
            <h3 class="skill-title">{{ group.title }}</h3>
            <ul class="skill-list">
              <li v-for="s in group.skills" :key="s">{{ s }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '$1M+',  label: 'Funding Secured' },
  { value: '20k+',  label: 'Reader Community' },
  { value: '10+',    label: 'Years in AI/ML' },
]

const skillGroups = [
  {
    icon: '🧠',
    title: 'Machine Learning',
    skills: ['PyTorch', 'PyTorch Geometric', 'Huggingface', 'RAG & CAG', 'LoRA/ PEFT', 'PySpark', 'Supervised/Semisupervised/Unsupervised', 'Gradient Boosting', 'Entity Extraction and Reconciliation', 'Speculative Sampling', 'Graph Modeling', 'transformers', 'Span Labeling', 'Time Series Modeling'],
  },
  {
    icon: '🤖',
    title: 'AI Application Development',
    skills: ['LangChain', 'LangGraph', 'MCP', 'OpenAI / Anthropic API', 'LangFuse', 'ReACT style agents', 'Graph style agents', 'Advanced Tool Use'],
  },
  {
    icon: '🎨',
    title: 'Front End',
    skills: ['Vue.js', 'Android w/ Kotlin', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: '⚙️',
    title: 'Back End',
    skills: ['AWS Amplify', 'Firebase', 'Spark', 'K8s', 'Helm', 'SQL', 'FastAPI', 'Redis', 'MongoDB'],
  },
  {
    icon: '🚧',
    title: 'Infra and DevOps',
    skills: ['Github Actions', 'MongoDB', 'AWS Amplify', 'AWS ECR & ECS', 'AWS S3'],
  },
  {
    icon: '🗺️',
    title: 'Project Management',
    skills: ['Scrum', 'Kanban', 'Trello', 'Jira'],
  },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}

.body-text {
  color: var(--muted);
  margin-bottom: 1.25rem;
  line-height: 1.75;
}

.about-stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.stat { display: flex; flex-direction: column; }
.stat-value { font-size: 2rem; font-weight: 800; line-height: 1; }
.stat-label { font-size: 0.78rem; color: var(--muted); margin-top: 0.25rem; letter-spacing: 0.05em; }

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skills-note {
  font-size: 0.78rem;
  color: var(--muted);
  font-style: italic;
}

.skill-card {
  padding: 1.4rem 1.6rem;
}

.skill-icon { font-size: 1.4rem; margin-bottom: 0.5rem; }
.skill-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.75rem;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-list li {
  font-size: 0.78rem;
  color: var(--muted);
  padding: 0.2rem 0.6rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 6px;
}
</style>

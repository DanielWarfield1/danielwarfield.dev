<template>
  <section id="content">
    <div class="section">
      <h2 class="section-title">Writing &amp; Video</h2>

      <div class="content-grid">
        <!-- Substack -->
        <a href="https://iaee.substack.com" target="_blank" class="glass-card content-card substack-card">
          <div class="card-top">
            <div class="platform-badge substack-badge">Substack and Medium</div>
            <span class="follower-count">20k+ readers</span>
          </div>
          <h3 class="card-title">Intuitively &amp; Exhaustively Explained</h3>
          <p class="card-desc">
            Deep dives into LLMs, RAG, computer vision, and agentic systems —
            written for engineers who want to actually understand the tech, not
            just use it. Readers include engineers, researchers, and investors from across the industry.
          </p>
          <div class="topics">
            <span v-for="t in substackTopics" :key="t" class="topic-tag">{{ t }}</span>
          </div>
          <div class="card-cta">Read on Substack ↗</div>
        </a>

        <!-- YouTube -->
        <a href="https://www.youtube.com/@EyeLevelAI" target="_blank" class="glass-card content-card youtube-card">
          <div class="card-top">
            <div class="platform-badge youtube-badge">YouTube</div>
            <span class="channel-name">@EyeLevelAI</span>
          </div>
          <h3 class="card-title">EyeLevel AI — Technical Video Series</h3>
          <p class="card-desc">
            Video content produced at Eyelevel.ai covering AI product
            development, RAG architectures, LLM observability, and
            enterprise AI deployment in regulated environments.
          </p>
          <div class="topics">
            <span v-for="t in youtubeTopics" :key="t" class="topic-tag">{{ t }}</span>
          </div>
          <div class="card-cta">Watch on YouTube ↗</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const substackTopics = ['LLMs', 'RAG', 'Computer Vision', 'Agentic AI', 'ML Theory']
const youtubeTopics  = ['AI Products', 'RAG Systems', 'LLM Observability', 'Enterprise AI']
</script>

<style scoped>
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 700px) {
  .content-grid { grid-template-columns: 1fr; }
}

.content-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  text-decoration: none;
  cursor: pointer;
}

.substack-card:hover {
  border-color: rgba(255, 100, 0, 0.4);
  box-shadow: 0 0 35px rgba(255, 100, 0, 0.15);
}

.youtube-card:hover {
  border-color: rgba(255, 0, 0, 0.4);
  box-shadow: 0 0 35px rgba(255, 0, 0, 0.15);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.platform-badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
}

.substack-badge {
  background: rgba(255, 100, 0, 0.15);
  color: #ff8040;
  border: 1px solid rgba(255, 100, 0, 0.3);
}

.youtube-badge {
  background: rgba(255, 0, 0, 0.12);
  color: #ff4444;
  border: 1px solid rgba(255, 0, 0, 0.3);
}

.follower-count,
.channel-name {
  font-size: 0.78rem;
  color: var(--muted);
}

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.topic-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  color: var(--muted);
}

.card-cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent2);
  margin-top: auto;
}
</style>

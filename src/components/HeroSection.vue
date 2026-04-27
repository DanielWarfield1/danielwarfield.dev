<template>
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        Hi, I'm <span class="gradient-text">Daniel Warfield</span>
      </h1>
      <p class="hero-subtitle">
        AI engineer and manager. I've taken ideas to funded,
        revenue-generating products a few times, both solo and
        with teams.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding-top: 5rem;
}


.hero-title {
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 2rem;
  line-height: 1.65;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}


</style>

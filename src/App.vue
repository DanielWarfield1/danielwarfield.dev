<template>
  <div id="root">
    <ThreeCanvas />
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContentSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <p>© 2026 Daniel Warfield · <a href="mailto:hire@danielwarfield.dev">hire@danielwarfield.dev</a> · Built with Vue &amp; Three.js</p>
    </footer>
  </div>
</template>

<script setup>
import ThreeCanvas from './components/ThreeCanvas.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContentSection from './components/ContentSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style scoped>
#root { position: relative; min-height: 100vh; }

main { position: relative; z-index: 1; }

.footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  color: var(--muted);
  font-size: 0.8rem;
  border-top: 1px solid var(--border);
}
</style>

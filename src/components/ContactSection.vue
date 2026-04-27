<template>
  <section id="contact">
    <div class="section contact-section">
      <p class="section-label">Get In Touch</p>
      <h2 class="section-title">Let's Work Together</h2>
      <p class="contact-intro">
        I'm always open to interesting projects, collaborations, or just a good
        conversation about AI. Drop me a message and I'll get back to you.
      </p>
      <div class="contact-grid">
        <div class="contact-links">
          <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" class="glass-card contact-link">
            <span class="contact-link-icon">{{ link.icon }}</span>
            <div>
              <p class="contact-link-label">{{ link.label }}</p>
              <p class="contact-link-value">{{ link.value }}</p>
            </div>
          </a>
          <div class="glass-card contact-link resume-note">
            <span class="contact-link-icon">📄</span>
            <div>
              <p class="contact-link-label">Resume</p>
              <p class="contact-link-value">Available upon request</p>
            </div>
          </div>
        </div>
        <form class="glass-card contact-form" @submit.prevent="onSubmit">
          <div class="form-row">
            <label>
              Name
              <input v-model="form.name" type="text" placeholder="Jane Doe" required />
            </label>
            <label>
              Email
              <input v-model="form.email" type="email" placeholder="jane@example.com" required />
            </label>
          </div>
          <label class="full">
            Message
            <textarea v-model="form.message" rows="5" placeholder="Tell me about your project…" required />
          </label>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
            {{ submitting ? 'Sending…' : 'Send Message →' }}
          </button>
          <p v-if="sent" class="sent-msg">Message sent! I'll be in touch soon.</p>
          <p v-if="error" class="error-msg">Something went wrong. Try emailing directly.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)
const error = ref(false)
const submitting = ref(false)

async function onSubmit() {
  submitting.value = true
  error.value = false
  try {
    const res = await fetch('https://formspree.io/f/xnqybevb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (res.ok) {
      sent.value = true
      form.value = { name: '', email: '', message: '' }
      setTimeout(() => (sent.value = false), 5000)
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    submitting.value = false
  }
}

const links = [
  { icon: '📧', label: 'Email', value: 'hire@danielwarfield.dev', href: 'mailto:hire@danielwarfield.dev' },
  { icon: '✍️', label: 'Blog', value: 'iaee.substack.com', href: 'https://iaee.substack.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/danielwarfield', href: 'https://linkedin.com/in/danielwarfield' },
]
</script>

<style scoped>
.contact-section { text-align: center; }

.contact-intro {
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 3rem;
  line-height: 1.75;
}

.contact-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.5rem;
  text-align: left;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}

.contact-links { display: flex; flex-direction: column; gap: 1rem; }

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  cursor: pointer;
  transition: all 0.25s;
}

.resume-link {
  border-color: rgba(99, 102, 241, 0.3);
}

.contact-link-icon { font-size: 1.5rem; flex-shrink: 0; }

.contact-link > div { min-width: 0; overflow: hidden; }

.contact-link-label { font-size: 0.75rem; color: var(--muted); letter-spacing: 0.05em; }
.contact-link-value {
  font-size: 0.85rem;
  color: var(--text);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-form {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 480px) {
  .form-row { grid-template-columns: 1fr; }
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

input, textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  resize: vertical;
}

input:focus, textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

input::placeholder, textarea::placeholder { color: var(--muted); opacity: 0.6; }

.submit-btn { align-self: flex-start; }

.sent-msg {
  font-size: 0.875rem;
  color: var(--accent2);
  font-weight: 500;
}

.error-msg {
  font-size: 0.875rem;
  color: #f87171;
  font-weight: 500;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

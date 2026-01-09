<script setup lang="ts">
import { useTextContent } from '@duffcloudservices/cms'

const { t } = useTextContent({
  pageSlug: 'home',
  defaults: {
    // Hero Section
    'hero.name': 'CloudSync',
    'hero.text': 'Cloud Sync Made Simple',
    'hero.tagline': 'The modern cloud synchronization platform for teams. Real-time collaboration, version control, and seamless integrations.',
    
    // Features
    'features.0.title': 'Real-time Sync',
    'features.0.details': 'Changes sync instantly across all devices. No more manual uploads or waiting for background processes.',
    'features.1.title': 'Team Collaboration',
    'features.1.details': 'Built-in commenting, presence indicators, and conflict resolution for seamless teamwork.',
    'features.2.title': 'Enterprise Security',
    'features.2.details': 'End-to-end encryption, SSO support, and granular access controls to protect your data.',
    'features.3.title': 'Powerful API',
    'features.3.details': 'RESTful API and webhooks for seamless integration with your existing workflow.',
    
    // Testimonial
    'testimonial.quote': 'CloudSync reduced our file management overhead by 80%. The real-time sync is a game-changer.',
    'testimonial.author': 'Jane Smith, CTO at TechCorp',
  }
})

const features = [
  { icon: '⚡', key: 0 },
  { icon: '👥', key: 1 },
  { icon: '🔒', key: 2 },
  { icon: '🔌', key: 3 },
]
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section data-section="hero" data-section-label="Hero Banner" class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-name">
            <span data-text-key="hero.name" class="clip">{{ t('hero.name') }}</span>
          </h1>
          <p data-text-key="hero.text" class="hero-tagline">{{ t('hero.text') }}</p>
          <p data-text-key="hero.tagline" class="hero-description">{{ t('hero.tagline') }}</p>
          <div class="hero-actions">
            <a href="/guide/getting-started" class="action-btn primary">Get Started</a>
            <a href="/guide/" class="action-btn secondary">View Documentation</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="/hero-image.svg" alt="CloudSync" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section data-section="features" data-section-label="Features" class="features-section">
      <div class="features-grid">
        <article v-for="feature in features" :key="feature.key" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h2 :data-text-key="`features.${feature.key}.title`" class="feature-title">
            {{ t(`features.${feature.key}.title`) }}
          </h2>
          <p :data-text-key="`features.${feature.key}.details`" class="feature-details">
            {{ t(`features.${feature.key}.details`) }}
          </p>
        </article>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section data-section="testimonial" data-section-label="Testimonial" class="testimonial-section">
      <blockquote class="testimonial">
        <p data-text-key="testimonial.quote" class="quote">{{ t('testimonial.quote') }}</p>
        <footer>
          — <span data-text-key="testimonial.author">{{ t('testimonial.author') }}</span>
        </footer>
      </blockquote>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero-section {
  padding: 64px 0;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 48px;
}

@media (min-width: 960px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
  }
  
  .hero-text {
    flex: 1;
  }
  
  .hero-image {
    flex: 1;
  }
}

.hero-name {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
}

.hero-name .clip {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-tagline {
  font-size: 32px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 12px;
}

.hero-description {
  font-size: 18px;
  color: var(--vp-c-text-2);
  max-width: 560px;
  margin-bottom: 24px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 960px) {
  .hero-actions {
    justify-content: flex-start;
  }
}

.action-btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.action-btn.primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.action-btn.primary:hover {
  background: var(--vp-c-brand-2);
}

.action-btn.secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.action-btn.secondary:hover {
  border-color: var(--vp-c-brand-1);
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

/* Features Section */
.features-section {
  padding: 64px 0;
}

.features-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.feature-card {
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s;
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.feature-details {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* Testimonial Section */
.testimonial-section {
  padding: 64px 0;
}

.testimonial {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  text-align: center;
}

.testimonial .quote {
  font-size: 20px;
  font-style: italic;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
  line-height: 1.6;
}

.testimonial footer {
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>

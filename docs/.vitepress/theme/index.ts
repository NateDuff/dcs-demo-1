// Custom VitePress theme with DCS visual editor support
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Import custom components with data-section attributes
import DcsSection from './components/DcsSection.vue'
import DcsText from './components/DcsText.vue'

// Import custom styles
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components for visual editor support in markdown
    app.component('DcsSection', DcsSection)
    app.component('DcsText', DcsText)
  }
} satisfies Theme

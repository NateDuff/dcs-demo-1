// Custom VitePress theme with DCS visual editor support
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Import custom layout and components with data-section attributes
import CustomLayout from './CustomLayout.vue'
import DcsSection from './components/DcsSection.vue'
import DcsText from './components/DcsText.vue'

// Import custom styles
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    // Register global components for visual editor support in markdown
    app.component('DcsSection', DcsSection)
    app.component('DcsText', DcsText)
  }
} satisfies Theme

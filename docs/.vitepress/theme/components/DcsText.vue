<script setup lang="ts">
import { computed } from 'vue'
import { useTextContent } from '@duffcloudservices/cms'

/**
 * DcsText - Renders CMS-managed text with data-text-key attribute
 * 
 * Usage in markdown:
 * <DcsText page="home" text-key="hero.title" fallback="Default Title" tag="h1" />
 */
const props = defineProps<{
  page: string
  textKey: string
  fallback: string
  tag?: string
}>()

// Create a config with the page as the pageSlug and the text key + fallback as defaults
// The useTextContent composable will merge build-time content with defaults
const { t } = useTextContent({
  pageSlug: props.page,
  defaults: {
    [props.textKey]: props.fallback
  }
})

// Get the content using just the textKey (page is already in the config)
const content = computed(() => t(props.textKey, props.fallback))
</script>

<template>
  <component
    :is="tag || 'span'"
    :data-text-key="`${page}.${textKey}`"
  >
    {{ content }}
  </component>
</template>

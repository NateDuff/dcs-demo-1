<script setup lang="ts">
/**
 * DcsSection - Wraps content with data-section attributes for visual editor
 * 
 * Usage in markdown:
 * <DcsSection id="intro" label="Introduction">
 *   ## Welcome
 *   Some content here...
 * </DcsSection>
 */
defineProps<{
  id: string
  label: string
  dynamic?: boolean
}>()
</script>

<template>
  <div
    :data-section="id"
    :data-section-label="label"
    :data-dynamic="dynamic ? 'true' : undefined"
  >
    <slot />
  </div>
</template>

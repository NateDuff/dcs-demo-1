<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import HomePage from './components/HomePage.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <!-- Use custom HomePage for home layout, default for everything else -->
  <Layout>
    <template #home-hero-before>
      <HomePage v-if="frontmatter.layout === 'home'" />
    </template>
    <template #home-hero-after v-if="frontmatter.layout === 'home'">
      <!-- Hide default home content by not rendering it -->
    </template>
  </Layout>
</template>

<style>
/* Hide the default VitePress home content when using custom layout */
.VPHomeHero,
.VPHomeFeatures {
  display: none !important;
}
</style>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <header class="section-title" v-reveal>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    <h2>{{ title }}</h2>
  </header>
</template>

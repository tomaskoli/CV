<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <span class="string-value">"{{ text }}"</span>
</template>

<style scoped>
.string-value {
  color: var(--syntax-string);
}
</style>

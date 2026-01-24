<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <span class="keyword">{{ text }}</span>
</template>

<style scoped>
.keyword {
  color: var(--syntax-keyword);
  font-weight: 500;
}
</style>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <span class="type-name">{{ text }}</span>
</template>

<style scoped>
.type-name {
  color: var(--syntax-type);
  font-weight: 500;
}
</style>

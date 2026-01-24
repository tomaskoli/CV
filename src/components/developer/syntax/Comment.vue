<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <span class="comment">{{ text }}</span>
</template>

<style scoped>
.comment {
  color: var(--syntax-comment);
  display: block;
}
</style>

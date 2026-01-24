<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <span class="property">{{ name }}</span>
</template>

<style scoped>
.property {
  color: var(--syntax-property);
}
</style>

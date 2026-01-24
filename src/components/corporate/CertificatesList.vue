<script setup lang="ts">
defineProps<{
  certificates: string[];
}>();
</script>

<template>
  <div class="certificates-list">
    <div v-for="(cert, index) in certificates" :key="index" class="certificate-item">
      <span class="text">{{ cert }}</span>
    </div>
  </div>
</template>

<style scoped>
.certificates-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.certificate-item {
  padding: 3px 0;
  transition: color 0.2s ease;
}

.certificate-item:hover {
  color: var(--accent);
}

.text {
  font-size: 13px;
  color: var(--text-primary);
}

.certificate-item:hover .text {
  color: var(--accent);
}
</style>

<script setup lang="ts">
defineProps<{
  title: string;
  items: string[];
}>();
</script>

<template>
  <div class="skills-category">
    <h4 class="category-title">{{ title }}</h4>
    <div class="skills-grid">
      <span v-for="(item, index) in items" :key="index" class="skill-badge">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.skills-category {
  margin-bottom: 20px;
}

.category-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
}

.skill-badge {
  color: var(--text-primary);
  font-size: 13px;
  transition: color 0.2s ease;
}

.skill-badge:hover {
  color: var(--accent);
}
</style>

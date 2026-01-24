<script setup lang="ts">
import Keyword from './syntax/Keyword.vue';
import TypeName from './syntax/TypeName.vue';

defineProps<{
  title: string;
  items: string[];
  multiline?: boolean;
}>();
</script>

<template>
  <div class="enum-section">
    <div class="enum-header">
      <Keyword text="public enum" />&nbsp;<TypeName :text="title" />
    </div>
    <div :class="['enum-content', { 'enum-content--multiline': multiline }]">
      <template v-if="multiline">
        <div v-for="(item, index) in items" :key="index" class="enum-item">{{ item }}{{ index < items.length - 1 ? ',' : '' }}</div>
      </template>
      <template v-else>
        <span v-for="(item, index) in items" :key="index" class="enum-item">{{ item }}<span v-if="index < items.length - 1">, </span></span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.enum-section {
  margin-bottom: 20px;
  padding: 8px;
  border-radius: 4px;
  border-left: 2px solid transparent;
  transition: all 0.3s ease;
}

.enum-section:hover {
  background-color: var(--bg-hover);
  border-left-color: var(--syntax-keyword);
  transform: translateX(3px);
}

.enum-header {
  font-size: 12px;
  margin-bottom: 8px;
}

.enum-content {
  font-size: 12px;
  line-height: 1.8;
  color: var(--text-secondary);
  padding-left: 16px;
}

.enum-content--multiline {
  display: flex;
  flex-direction: column;
}

.enum-item {
  transition: all 0.2s ease;
  padding: 2px 4px;
  border-radius: 3px;
}

.enum-item:hover {
  background-color: var(--bg-hover);
  color: var(--text-primary);
}
</style>

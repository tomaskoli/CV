<script setup lang="ts">
import Keyword from './syntax/Keyword.vue';
import TypeName from './syntax/TypeName.vue';

defineProps<{
  modifier: string;
  title: string;
}>();
</script>

<template>
  <div class="code-section">
    <div class="section-header">
      <Keyword :text="modifier" />&nbsp;<TypeName :text="title" />
    </div>
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.code-section {
  margin-bottom: 30px;
}

@media print {
  .code-section {
    margin-bottom: 15px;
  }
}

.section-header {
  font-size: 14px;
  margin-bottom: 10px;
  padding: 8px 10px;
  margin-left: -10px;
  border-radius: 4px;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.section-header:hover {
  background-color: var(--bg-hover);
  border-left-color: var(--syntax-type);
  transform: translateX(5px);
}

.section-content {
  padding-left: 20px;
}
</style>

<script setup lang="ts">
import Keyword from './syntax/Keyword.vue';
import Property from './syntax/Property.vue';
import StringValue from './syntax/StringValue.vue';

defineProps<{
  type: string;
  name: string;
  value: string;
  isLink?: boolean;
  href?: string;
}>();
</script>

<template>
  <div class="property-line">
    <Keyword :text="`public ${type}`" />&nbsp;<Property :name="name" /> = <a v-if="isLink && href" :href="href" target="_blank" class="link"><StringValue :text="value" /></a><StringValue v-else :text="value" />;
  </div>
</template>

<style scoped>
.property-line {
  padding: 2px 0;
}

.link {
  text-decoration: none;
  transition: all 0.2s ease;
}

.link:hover {
  filter: brightness(1.2);
}
</style>

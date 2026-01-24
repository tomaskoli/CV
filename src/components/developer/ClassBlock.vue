<script setup lang="ts">
import Keyword from './syntax/Keyword.vue';
import Property from './syntax/Property.vue';
import StringValue from './syntax/StringValue.vue';
import Comment from './syntax/Comment.vue';

defineProps<{
  className: string;
  modifier?: string;
  baseClass?: string;
  properties: Array<{
    type: string;
    name: string;
    value: string | string[];
  }>;
  comments?: string[];
}>();
</script>

<template>
  <div class="class-block">
    <div class="class-header">
      <Keyword :text="modifier || 'public class'" />&nbsp;<span class="function-name">{{ className }}</span><template v-if="baseClass"> : <Keyword :text="baseClass" /></template>
    </div>
    <div class="class-body">
      <div class="brace">{</div>
      <div class="class-content">
        <div v-for="(prop, index) in properties" :key="index" class="property-line">
          <Keyword :text="`public ${prop.type}`" />&nbsp;<Property :name="prop.name" /> = <template v-if="Array.isArray(prop.value)"><Keyword text="new" />[] { <span v-for="(v, i) in prop.value" :key="i"><StringValue :text="v" /><span v-if="i < prop.value.length - 1">, </span></span> }</template><template v-else-if="prop.type === 'DateRange'"><Keyword text="new" />(<StringValue :text="prop.value.split('|')[0]" />, <StringValue :text="prop.value.split('|')[1]" />)</template><StringValue v-else :text="String(prop.value)" />;
        </div>
        
        <template v-if="comments && comments.length > 0">
          <div class="comments-section">
            <Comment text="/* <summary>" />
            <Comment v-for="(comment, index) in comments" :key="index" :text="` - ${comment}`" />
            <Comment text="</summary> */" />
          </div>
        </template>
      </div>
      <div class="brace">}</div>
    </div>
  </div>
</template>

<style scoped>
.class-block {
  margin-bottom: 24px;
  animation: fadeIn 0.5s ease-out forwards;
}

@media print {
  .class-block {
    margin-bottom: 12px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.class-header {
  font-size: 14px;
  padding: 8px 10px;
  margin: -8px -10px 0;
  border-radius: 4px;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.class-header:hover {
  background-color: var(--bg-hover);
  border-left-color: var(--syntax-type);
  transform: translateX(5px);
}

.function-name {
  color: var(--syntax-function);
}

.class-body {
  padding-left: 20px;
}

.class-content {
  padding-left: 20px;
}

.brace {
  color: var(--text-primary);
}

.property-line {
  padding: 2px 8px;
  margin: -2px -8px;
  border-radius: 3px;
  transition: all 0.2s ease;
}

.property-line:hover {
  background-color: var(--bg-hover);
  transform: translateX(3px);
}

.comments-section {
  margin-top: 12px;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.comments-section:hover {
  background-color: rgba(106, 153, 85, 0.1);
}
</style>

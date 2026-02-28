<script setup lang="ts">
import type { Education } from '@/types/cv';

defineProps<{
  education: Education;
}>();

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
</script>

<template>
  <div class="education-card">
    <div class="content">
      <h3 class="institution">{{ education.institution }}</h3>
      <p class="degree">
        {{ education.degree }}
        <a
          v-if="education.thesisUrl"
          :href="education.thesisUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="thesis-link"
        >
          ({{ displayUrl(education.thesisUrl) }})
        </a>
      </p>
      <p class="field">{{ education.field }}</p>
      <span class="date">{{ education.graduationDate }}</span>
    </div>
  </div>
</template>

<style scoped>
.education-card {
  display: flex;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 16px 20px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

.content {
  flex: 1;
}

.institution {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 8px 0;
}

.degree {
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
  margin: 0 0 4px 0;
}

.field {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0 0 8px 0;
}

.date {
  font-size: 12px;
  color: var(--text-muted);
}

.thesis-link {
  font-size: 13px;
  color: var(--accent);
  text-decoration: none;
  margin-left: 4px;
}

.thesis-link:hover {
  text-decoration: underline;
}
</style>

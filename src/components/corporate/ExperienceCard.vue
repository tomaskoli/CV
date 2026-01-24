<script setup lang="ts">
import type { Experience } from '@/types/cv';

defineProps<{
  experience: Experience;
}>();
</script>

<template>
  <div class="experience-card">
    <div class="timeline-marker"></div>
    <div class="card-content">
      <div class="header">
        <div class="company-info">
          <h3 class="company">{{ experience.company }}</h3>
          <span class="role">{{ experience.role }}</span>
        </div>
        <div class="meta">
          <span class="duration">{{ experience.duration.start }} - {{ experience.duration.end }}</span>
          <span class="location">{{ experience.location }}</span>
        </div>
      </div>
      
      <ul v-if="experience.highlights && experience.highlights.length > 0" class="highlights">
        <li v-for="(highlight, index) in experience.highlights" :key="index">
          {{ highlight }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.experience-card {
  position: relative;
  padding-left: 32px;
  padding-bottom: 32px;
  border-left: 2px solid var(--border-color);
}

.experience-card:last-child {
  border-left-color: transparent;
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -7px;
  top: 0;
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
}

.card-content {
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 20px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
}

.card-content:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.company {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 4px 0;
}

.role {
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
}

.meta {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.duration {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
}

.location {
  font-size: 12px;
  color: var(--text-muted);
}

.highlights {
  margin: 0;
  padding-left: 20px;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
}

.highlights li {
  margin-bottom: 8px;
}

.highlights li:last-child {
  margin-bottom: 0;
}

@media print {
  .experience-card {
    padding-bottom: 16px;
  }
  
  .card-content {
    padding: 12px !important;
    background: var(--bg-secondary) !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  .highlights {
    font-size: 12px;
    line-height: 1.5;
  }
  
  .highlights li {
    margin-bottom: 4px;
  }
}
</style>

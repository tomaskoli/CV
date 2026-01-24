<script setup lang="ts">
defineProps<{
  name: string;
  linkedIn: string;
  github: string;
  website?: string;
  location: string[];
  summary: string[];
}>();

const displayUrl = (url: string) => {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
};
</script>

<template>
  <div class="info-card">
    <h1 class="name">{{ name }}</h1>
    <p class="location">{{ location.join(', ') }}</p>
    <div class="links">
      <a :href="linkedIn" target="_blank" class="link">
        <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        {{ displayUrl(linkedIn) }}
      </a>
      <a :href="github" target="_blank" class="link">
        <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        {{ displayUrl(github) }}
      </a>
      <a v-if="website" :href="website" target="_blank" class="link">
        <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </svg>
        {{ displayUrl(website) }}
      </a>
    </div>
    <div class="summary">
      <p v-for="(line, index) in summary" :key="index">
        {{ line.replace(/^\/\/\s*/, '') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  text-align: center;
  padding: 20px 24px;
  background: #fafafa;
  border-radius: var(--border-radius);
  color: #333;
  margin-bottom: 24px;
  border: 1px solid #eee;
}

.name {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.location {
  font-size: 13px;
  color: #555;
  margin: 0 0 6px 0;
}

.links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.link {
  color: var(--accent);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.link-icon {
  width: 14px;
  height: 14px;
}

.summary {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #ddd;
}

.summary p {
  font-size: 13px;
  line-height: 1.5;
  margin: 0 0 4px 0;
  font-style: italic;
  color: #555;
}

.summary p:last-child {
  margin-bottom: 0;
}

@media print {
  .info-card {
    padding: 15px 20px;
    margin-bottom: 16px;
    background: #fafafa !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  .name {
    font-size: 20px;
  }
  
  .summary {
    margin-top: 8px;
    padding-top: 8px;
  }
}
</style>

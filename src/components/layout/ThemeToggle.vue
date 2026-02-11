<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { toggleTheme, isDeveloper } = useTheme();

const printCV = () => {
  window.print();
};
</script>

<template>
  <div class="header-actions">
    <a 
      href="https://github.com/tomaskoli/CV" 
      target="_blank" 
      class="icon-btn"
      title="View on GitHub"
    >
      <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    <button 
      class="icon-btn"
      @click="printCV"
      title="Print / Save as PDF"
    >
      <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
      </svg>
    </button>
    <button 
      class="theme-toggle" 
      @click="toggleTheme"
      :title="isDeveloper ? 'Switch to Clean Theme' : 'Switch to Dev Theme'"
    >
      <span class="icon">{{ isDeveloper ? '🗎' : '&lt;/&gt;' }}</span>
      <span class="label">{{ isDeveloper ? 'Switch to Clean Theme' : 'Switch to Dev Theme' }}</span>
    </button>
  </div>
</template>

<style scoped>
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  
  padding: 6px 12px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: 11px;
  
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--bg-hover);
  border-color: var(--accent);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 12px;
}

.label {
  font-weight: 500;
}

@media (max-width: 768px) {
  .theme-toggle {
    padding: 5px 10px;
    font-size: 10px;
  }
  
  .icon-btn {
    width: 28px;
    height: 28px;
  }
  
  .btn-icon {
    width: 16px;
    height: 16px;
  }
}

@media print {
  .header-actions {
    display: none !important;
  }
}
</style>

<script setup lang="ts">
import ThemeToggle from '@/components/layout/ThemeToggle.vue';
import CvSidebar from '@/components/layout/CvSidebar.vue';
import CvMain from '@/components/layout/CvMain.vue';
</script>

<template>
  <div class="app">
    <header class="app-header">
      <ThemeToggle />
    </header>
    <div class="cv-container">
      <div class="cv-card">
        <CvSidebar />
        <CvMain />
      </div>
    </div>
  </div>
</template>

<style>
@import '@/styles/variables.css';
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  line-height: var(--line-height);
  font-size: var(--font-size-base);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Print Styles */
@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  
  body {
    background-color: var(--bg-primary) !important;
    color: var(--text-primary) !important;
  }
}
</style>

<style scoped>
.app {
  min-height: 100vh;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background: var(--bg-primary);
}

.cv-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px 20px 20px 20px;
}

.cv-card {
  background-color: var(--bg-primary);
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 90px);
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
}

@media (max-width: 1024px) {
  .cv-card {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 10px 15px;
  }
  
  .cv-container {
    padding: 60px 10px 10px 10px;
  }
  
  .cv-card {
    min-height: calc(100vh - 80px);
  }
}

@media print {
  .app {
    min-height: auto;
    padding: 0;
  }
  
  .app-header {
    display: none !important;
  }
  
  .cv-container {
    padding: 0;
    max-width: 100%;
  }
  
  .cv-card {
    display: flex !important;
    flex-direction: row !important;
    min-height: auto;
    box-shadow: none;
    border: none;
    border-radius: 0;
  }
}
</style>

import { ref, computed, watchEffect } from 'vue';
import type { Theme } from '@/types/theme';

const STORAGE_KEY = 'cv-theme';

const theme = ref<Theme>(
  (localStorage.getItem(STORAGE_KEY) as Theme) || 'developer'
);

export function useTheme() {
  const isDeveloper = computed(() => theme.value === 'developer');

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
    localStorage.setItem(STORAGE_KEY, newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme.value === 'developer' ? 'corporate' : 'developer');
  };

  // Initialize theme on document
  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value);
  });

  return {
    theme,
    isDeveloper,
    setTheme,
    toggleTheme
  };
}

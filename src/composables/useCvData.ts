import { reactive } from 'vue';
import type { CVData, Personal, Skills, SpokenLanguages, Education, Experience } from '@/types/cv';

// Import YAML files as raw text
import personalYaml from '@/content/personal.yaml?raw';
import summaryYaml from '@/content/summary.yaml?raw';
import skillsYaml from '@/content/skills.yaml?raw';
import certificatesYaml from '@/content/certificates.yaml?raw';
import languagesYaml from '@/content/languages.yaml?raw';
import educationYaml from '@/content/education.yaml?raw';
import experienceYaml from '@/content/experience.yaml?raw';

import yaml from 'js-yaml';

function parseYaml<T>(content: string): T {
  return yaml.load(content) as T;
}

const cvData: CVData = reactive({
  personal: parseYaml<Personal>(personalYaml),
  summary: parseYaml<string[]>(summaryYaml),
  certificates: parseYaml<string[]>(certificatesYaml),
  skills: parseYaml<Skills>(skillsYaml),
  spokenLanguages: parseYaml<SpokenLanguages>(languagesYaml),
  education: parseYaml<Education[]>(educationYaml),
  experience: parseYaml<Experience[]>(experienceYaml)
});

export function useCvData() {
  return cvData;
}

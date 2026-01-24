<script setup lang="ts">
import { useCvData } from '@/composables/useCvData';
import { useTheme } from '@/composables/useTheme';

// Developer components
import EnumList from '@/components/developer/EnumList.vue';
import Keyword from '@/components/developer/syntax/Keyword.vue';
import TypeName from '@/components/developer/syntax/TypeName.vue';
import Property from '@/components/developer/syntax/Property.vue';
import StringValue from '@/components/developer/syntax/StringValue.vue';

// Corporate components
import SkillsGrid from '@/components/corporate/SkillsGrid.vue';
import CertificatesList from '@/components/corporate/CertificatesList.vue';
import SectionHeader from '@/components/corporate/SectionHeader.vue';

const cvData = useCvData();
const { isDeveloper } = useTheme();
</script>

<template>
  <aside class="sidebar">
    <!-- Developer Mode -->
    <template v-if="isDeveloper">
      <div class="namespace">
        <Keyword text="namespace" />&nbsp;<TypeName text="CurriculumVitae" />
      </div>

      <EnumList title="Skills" :items="cvData.skills.profile" />
      <EnumList title="Technologies" :items="cvData.skills.technologies" />
      <EnumList title="Tools" :items="cvData.skills.tools" />

      <div class="spoken-languages">
        <div class="section-header">
          <Keyword text="public class" />&nbsp;<TypeName text="SpokenLanguages" />
        </div>
        <div class="content">
          <div v-for="(level, lang) in cvData.spokenLanguages" :key="lang" class="lang-line">
            <Keyword text="public string" />&nbsp;<Property :name="String(lang)" /> = <StringValue :text="String(level)" />;
          </div>
        </div>
      </div>

      <EnumList title="Certificates" :items="cvData.certificates" :multiline="true" />
    </template>

    <!-- Corporate Mode -->
    <template v-else>
      <SectionHeader title="Skills" />
      <SkillsGrid title="Core Competencies" :items="cvData.skills.profile" />
      <SkillsGrid title="Technologies" :items="cvData.skills.technologies" />
      <SkillsGrid title="Tools" :items="cvData.skills.tools" />

      <SectionHeader title="Languages" />
      <div class="languages-corporate">
        <div v-for="(level, lang) in cvData.spokenLanguages" :key="lang" class="language-item">
          <span class="lang-name">{{ lang }}</span>
          <span class="lang-level">{{ level }}</span>
        </div>
      </div>

      <SectionHeader title="Certifications" />
      <CertificatesList :certificates="cvData.certificates" />
    </template>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 320px;
  padding: 30px 24px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
}

.namespace {
  font-size: 13px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}

.spoken-languages {
  margin-bottom: 20px;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.spoken-languages:hover {
  background-color: var(--bg-hover);
}

.spoken-languages .section-header {
  font-size: 12px;
  margin-bottom: 8px;
}

.spoken-languages .content {
  padding-left: 16px;
  font-size: 12px;
}

.lang-line {
  line-height: 1.8;
}

/* Corporate styles */
.languages-corporate {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.language-item {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
}

.lang-name {
  font-weight: 500;
  color: var(--text-primary);
}

.lang-level {
  color: var(--accent);
  font-size: 13px;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}

@media print {
  .sidebar {
    width: 250px !important;
    min-width: 250px !important;
    flex-shrink: 0 !important;
    background: var(--bg-secondary) !important;
    border-right: 1px solid var(--border-color) !important;
    padding: 15px !important;
    font-size: 11px !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  .enum-section,
  .spoken-languages {
    margin-bottom: 12px !important;
  }
}
</style>

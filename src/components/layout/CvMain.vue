<script setup lang="ts">
import { useCvData } from '@/composables/useCvData';
import { useTheme } from '@/composables/useTheme';

// Developer components
import CodeSection from '@/components/developer/CodeSection.vue';
import ClassBlock from '@/components/developer/ClassBlock.vue';
import Comment from '@/components/developer/syntax/Comment.vue';
import PropertyLine from '@/components/developer/PropertyLine.vue';

// Corporate components
import InfoCard from '@/components/corporate/InfoCard.vue';
import SectionHeader from '@/components/corporate/SectionHeader.vue';
import ExperienceCard from '@/components/corporate/ExperienceCard.vue';
import EducationCard from '@/components/corporate/EducationCard.vue';

const cvData = useCvData();
const { isDeveloper } = useTheme();

const displayUrl = (url: string) => {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
};
</script>

<template>
  <main class="main-content">
    <!-- Developer Mode -->
    <template v-if="isDeveloper">
      <!-- Summary -->
      <div class="summary">
        <Comment v-for="(line, index) in cvData.summary" :key="index" :text="`<summary>${line}</summary>`" />
      </div>

      <!-- Personal Information -->
      <CodeSection modifier="public sealed class" title="PersonalInformation">
        <PropertyLine type="string" name="Name" :value="cvData.personal.name" />
        <PropertyLine 
          type="string" 
          name="LinkedIn" 
          :value="displayUrl(cvData.personal.linkedIn)" 
          :is-link="true"
          :href="cvData.personal.linkedIn"
        />
        <PropertyLine 
          type="string" 
          name="GitHub" 
          :value="displayUrl(cvData.personal.github)" 
          :is-link="true"
          :href="cvData.personal.github"
        />
        <PropertyLine 
          v-if="cvData.personal.website"
          type="string" 
          name="Website" 
          :value="displayUrl(cvData.personal.website)" 
          :is-link="true"
          :href="cvData.personal.website"
        />
        <div class="property-line">
          <span class="keyword">public static string[]</span>&nbsp;<span class="property">Location</span> = <span class="keyword">new</span>[] { <span v-for="(loc, i) in cvData.personal.location" :key="i"><span class="string">"{{ loc }}"</span><span v-if="i < cvData.personal.location.length - 1">, </span></span> };
        </div>
      </CodeSection>

      <!-- Education -->
      <CodeSection modifier="public static class" title="EducationHistory">
        <ClassBlock
          v-for="(edu, index) in cvData.education"
          :key="index"
          class-name="Education"
          modifier="public class"
          :properties="[
            { type: 'string', name: 'Degree', value: edu.degree },
            { type: 'string', name: 'Field', value: edu.field },
            { type: 'DateRange', name: 'Graduation', value: edu.graduationDate.replace(' - ', '|') },
            { type: 'string', name: 'University', value: edu.institution }
          ]"
        />
      </CodeSection>

      <!-- Experience -->
      <CodeSection modifier="public abstract class" title="ProfessionalExperience">
        <ClassBlock
          v-for="(exp, index) in cvData.experience"
          :key="index"
          :class-name="exp.company.replace(/\s/g, '').replace(/\./g, '_')"
          modifier="public class"
          base-class="IExperience"
          :properties="[
            { type: 'DateRange', name: 'Duration', value: `${exp.duration.start}|${exp.duration.end}` },
            { type: 'string', name: 'Role', value: exp.role },
            { type: 'string', name: 'Location', value: exp.location }
          ]"
          :comments="exp.highlights"
        />
      </CodeSection>
    </template>

    <!-- Corporate Mode -->
    <template v-else>
      <InfoCard 
        :name="cvData.personal.name"
        :linked-in="cvData.personal.linkedIn"
        :github="cvData.personal.github"
        :website="cvData.personal.website"
        :location="cvData.personal.location"
        :summary="cvData.summary"
      />

      <SectionHeader title="Professional Experience" />
      <div class="experience-timeline">
        <ExperienceCard 
          v-for="(exp, index) in cvData.experience" 
          :key="index" 
          :experience="exp" 
        />
      </div>

      <SectionHeader title="Education" />
      <EducationCard 
        v-for="(edu, index) in cvData.education" 
        :key="index" 
        :education="edu" 
      />
    </template>
  </main>
</template>

<style scoped>
.main-content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
}

.summary {
  margin-bottom: 30px;
  font-size: 13px;
  line-height: 1.8;
}

/* Developer mode inline styles */
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

.keyword {
  color: var(--syntax-keyword);
  font-weight: 500;
}

.property {
  color: var(--syntax-property);
}

.string {
  color: var(--syntax-string);
}

/* Corporate mode */
.experience-timeline {
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 24px 16px;
  }
}

@media print {
  .main-content {
    flex: 1 !important;
    padding: 15px !important;
    background: var(--bg-primary) !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  .summary {
    margin-bottom: 15px !important;
  }
  
  .code-section {
    margin-bottom: 15px !important;
  }
}
</style>

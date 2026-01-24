export interface Personal {
  name: string;
  linkedIn: string;
  github: string;
  website?: string;
  location: string[];
}

export interface Duration {
  start: string;
  end: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: Duration;
  description?: string;
  highlights?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export interface Skills {
  profile: string[];
  technologies: string[];
  tools: string[];
}

export interface SpokenLanguages {
  [language: string]: string;
}

export interface CVData {
  personal: Personal;
  summary: string[];
  certificates: string[];
  skills: Skills;
  spokenLanguages: SpokenLanguages;
  education: Education[];
  experience: Experience[];
}

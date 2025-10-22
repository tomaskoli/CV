"use strict";
// CV Data - Update this with your information
const cvData = {
    personal: {
        name: "Tomas Kolinsky",
        linkedIn: "https://linkedin.com/in/tomas-kolinsky",
        location: ["Prague", "Czechia"]
    },
    summary: [
        "// My motto: People over process. Outcomes over artifacts.",
        "// I believe in building empowered teams that deliver real value - with clarity, autonomy, and purpose."
    ],
    certificates: [
        "PRINCE2 Practitioner in Agile Project Management,",
        "SAFe 5.1 Scrum Master (SSM),",
        "Microsoft Full-Stack Developer,",
        "Introduction to AI and Machine Learning on GCP,",
        "Certificate in Advanced English (CAE)"
    ],
    languages: [
        "C#, C,",
        "Python,",
        "SQL,",
        "JavaScript,",
        "HTML, CSS"
    ],
    tools: [
        "Docker, Git, GitHub,",
        "VS Code, Cursor, PyCharm,",
        "Postman, Azure DevOps, Jenkins,",
        "ArgoCD, Kafka, Grafana, Kibana,",
        "GenAI/ML (Vertex AI), n8n,",
        "Google ADK, Semantic Kernel,",
        "MCP, Vector & Graph RAG"
    ],
    spokenLanguages: {
        "Czech": "Native",
        "English": "Fluent"
    },
    profile: [
        "Project Management,",
        "Full-Stack Development,",
        "Multi-cultural Team Leadership,",
        "Engineering Lifecycle Management,",
        "DevOps, GitOps & Agile Practices,",
        "AI/ML Workflows"
    ],
    education: [
        {
            institution: "Technical University of Ostrava",
            degree: "Master's Degree / Ing.",
            field: "System Engineering and Informatics",
            graduationDate: "2006 - 2012"
        }
    ],
    experience: [
        {
            company: "Alza.cz",
            role: "Engineering & Line Manager, ERP",
            location: "Prague, Czechia",
            duration: { start: "February 2024", end: "Present" },
            description: "Key achievements:\n - Built a new engineering team, emphasizing a self-organizing culture and establishing development workflows from scratch.\n - Improved Agile and DevOps practices across assigned team portfolio, ensuring technical capacity, recruitment, cross-functional communication with Business and Platform teams, and established relevant KPIs.\n - Leading a .NET Backend Guild, promoting knowledge sharing, and best practices among developers.\n - Championing AI adoption within the company, driving awareness and implementation of GenAI/ML solutions (Vertex AI, agentic, MCP, KG), founding member of the AI guild.\n - Authored the integration of LLMs into the company's warranty claims process, improving automation, accuracy, and CX.\n - Launched the company's first AI hackathon, driving innovation, collaboration, and hands-on experimentation.\n - Designed a dual-track career path initiative for software developers, enhancing professional growth and retention."
        },
        {
            company: "Capgemini",
            role: "IT Project Manager & Agile Team Leader",
            location: "Berlin, Germany",
            duration: { start: "March 2017", end: "January 2024" },
            description: "Managed diverse onshore and offshore software engineering teams, with full accountability for delivering a wide range of projects primarily in the automotive and banking sector. My role covered all aspects of people management, risk mitigation, stakeholder engagement, project P&L oversight, bid management and delivery, ensuring alignment with internal objectives and client expectations.\n Key achievements: \n - Led the transition of 3 teams from waterfall to agile practice, including customer onboarding and overcoming resistance, achieving a 30% improvement in time-to-market and accelerated cash flow.\n - Successfully expanded engineering teams from 13 to 25 members over 2 years, scaling to meet customer delivery demands while maintaining high performance standards.\n - Enhanced collaboration across multicultural teams in Germany, India, and Poland, streamlining workflows and increasing team retention by 50% compared to the program average.\n - Managed a portfolio of projects with a combined annual turnover exceeding €5M, consistently delivering contribution margins 4-6% above targets."
        },
        {
            company: "NCR Corporation",
            role: "PS Project Manager",
            location: "Prague, Czechia",
            duration: { start: "March 2015", end: "February 2017" },
            description: ""
        },
        {
            company: "Capgemini",
            role: "IT Consultant, MES Rollout",
            location: "Puebla, Mexico",
            duration: { start: "February 2013", end: "February 2015" },
            description: ""
        }
    ]
};
// Utility function to create HTML elements
function createElement(tag, className = '', content = '') {
    const element = document.createElement(tag);
    if (className)
        element.className = className;
    if (content)
        element.innerHTML = content;
    return element;
}
// Render Summary
function renderSummary() {
    const summaryContainer = document.getElementById('summary');
    if (!summaryContainer)
        return;
    cvData.summary.forEach(line => {
        const commentLine = createElement('span', 'comment', `<summary>${line}</summary>`);
        summaryContainer.appendChild(commentLine);
    });
}
// Render Information Section
function renderInformation() {
    const infoContainer = document.getElementById('information');
    if (!infoContainer)
        return;
    const info = cvData.personal;
    const displayLinkedIn = info.linkedIn
        .replace(/^https?:\/\/(www\.)?/, '')
        .replace(/\/$/, '');
    const lines = [
        `<span class="keyword">public string</span> <span class="property">Name</span> = <span class="string">"${info.name}"</span>;`,
        `<span class="keyword">public string</span> <span class="property">Contact</span> = <a href="${info.linkedIn}" target="_blank" class="linkedin-link"><span class="string">"${displayLinkedIn}"</span></a>;`,
        `<span class="keyword">public static string[]</span> <span class="property">Location</span> = <span class="keyword">new</span>[] { <span class="string">"${info.location[0]}"</span>, <span class="string">"${info.location[1]}"</span> };`,
        ``
    ];
    lines.forEach(line => {
        const lineElement = createElement('div', '', line);
        infoContainer.appendChild(lineElement);
    });
}
// Render Certificates
function renderCertificates() {
    const certsContainer = document.getElementById('certificatesList');
    if (!certsContainer)
        return;
    cvData.certificates.forEach(cert => {
        const certElement = createElement('div', '', cert);
        certsContainer.appendChild(certElement);
    });
}
// Render Languages
function renderLanguages() {
    const languagesContainer = document.getElementById('languagesList');
    if (!languagesContainer)
        return;
    cvData.languages.forEach(language => {
        const langElement = createElement('div', '', language);
        languagesContainer.appendChild(langElement);
    });
}
// Render Tools
function renderTools() {
    const toolsContainer = document.getElementById('toolsList');
    if (!toolsContainer)
        return;
    cvData.tools.forEach(tool => {
        const toolElement = createElement('div', '', tool);
        toolsContainer.appendChild(toolElement);
    });
}
// Render Spoken Languages
function renderSpokenLanguages() {
    const languagesContainer = document.getElementById('languagesSpoken');
    if (!languagesContainer)
        return;
    Object.entries(cvData.spokenLanguages).forEach(([lang, level]) => {
        const langElement = createElement('div', '', `<span class="keyword">public string</span> <span class="property">${lang}</span> = <span class="string">"${level}"</span>;`);
        languagesContainer.appendChild(langElement);
    });
}
// Render Profile
function renderProfile() {
    const profileContainer = document.getElementById('profile');
    if (!profileContainer)
        return;
    cvData.profile.forEach(trait => {
        const traitElement = createElement('div', '', trait);
        profileContainer.appendChild(traitElement);
    });
}
// Render Education
function renderEducation() {
    const educationContainer = document.getElementById('education');
    if (!educationContainer)
        return;
    cvData.education.forEach(edu => {
        const eduBlock = createElement('div', 'indent-2');
        const [gradStart, gradEnd] = (edu.graduationDate || '').split('-').map(s => s.trim());
        eduBlock.innerHTML = `
            <div><span class="keyword">public class</span> <span class="function">Education</span></div>
            <div>{</div>
            <div class="indent">
                <span class="keyword">public string</span> <span class="property">Degree</span> = <span class="string">"${edu.degree}"</span>;
            </div>
            <div class="indent">
                <span class="keyword">public string</span> <span class="property">Field</span> = <span class="string">"${edu.field}"</span>;
            </div>
            <div class="indent">
                <span class="keyword">public DateRange</span> <span class="property">Graduation</span> = <span class="keyword">new</span>(<span class="string">"${gradStart}"</span>, <span class="string">"${gradEnd}"</span>);
            </div>
            <div class="indent">
                <span class="keyword">public string</span> <span class="property">University</span> = <span class="string">"${edu.institution}"</span>;
            </div>
            <div>}</div>
        `;
        educationContainer.appendChild(eduBlock);
    });
}
// Render Experience
function renderExperience() {
    const experienceContainer = document.getElementById('experience');
    if (!experienceContainer)
        return;
    cvData.experience.forEach(exp => {
        const expBlock = createElement('div', 'indent-2');
        const descriptionHtml = (typeof exp.description === 'string' && exp.description.trim().length > 0)
            ? `
            <div class="indent comment" style="margin-top: 10px;">/* <summary></div>
            ${exp.description
                .split(/\r?\n/)
                .filter(l => l.trim().length)
                .map(l => '<div class="indent comment">' + l.trim() + '</div>')
                .join('')}
            <div class="indent comment"></summary> */</div>
            `
            : '';
        expBlock.innerHTML = `
            <div><span class="keyword">public class</span> <span class="function">${exp.company.replace(/\s/g, '').replace(/\./g, '_')}</span> : <span class="keyword">IExperience</span></div>
            <div>{</div>
            <div class="indent">
                <span class="keyword">public DateRange</span> <span class="property">Duration</span> = <span class="keyword">new</span>(<span class="string">"${exp.duration.start}"</span>, <span class="string">"${exp.duration.end}"</span>);
            </div>
            <div class="indent">
                <span class="keyword">public string</span> <span class="property">Role</span> = <span class="string">"${exp.role}"</span>;
            </div>
            <div class="indent">
                <span class="keyword">public string</span> <span class="property">Location</span> = <span class="string">"${exp.location}"</span>;
            </div>
            ${descriptionHtml}
            <div>}</div>
        `;
        experienceContainer.appendChild(expBlock);
        // Add spacing between experience items
        if (cvData.experience.indexOf(exp) < cvData.experience.length - 1) {
            experienceContainer.appendChild(createElement('div', '', '<br>'));
        }
    });
}
// Initialize the CV
function initializeCV() {
    // Render all sections
    renderSummary();
    renderInformation();
    renderCertificates();
    renderLanguages();
    renderTools();
    renderSpokenLanguages();
    renderProfile();
    renderEducation();
    renderExperience();
}
// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCV);
}
else {
    initializeCV();
}
// (no exports) - compiled script runs in browser without modules
//# sourceMappingURL=app.js.map
/*
  ============================================================
  YOUR SITE CONTENT — this is the only file you need to edit.
  ============================================================
  Tips:
  - Keep text inside "quotes". If your text contains a quote, use 'single' quotes inside, or \"escape\" it.
  - Every item in a list ends with a comma, e.g.  { ... },
  - To add a project: copy one { ... } block, paste it below, and change the text.
  - To remove something: delete its { ... } block (or the line).
  - Any field you don't need can be left out or set to "".
  - Lines starting with // are notes and are ignored.
*/

window.SITE = {

  // ---------- Header ----------
  name: "Gregg Nickel",
  title: "Business Applications Analyst · Salesforce & Microsoft Power Platform",
  summary: "I administer, automate, and improve the business applications that sales, finance, HR, legal, and operations teams rely on every day.",
  photo: "images/headshot.jpg",   // square photo in the images folder. Leave "" to show initials.

  // ---------- Contact ----------
  // The first three items that have a url also appear as buttons at the top of the page.
  // icon options: email, linkedin, github, phone, location, resume, link
  contact: [
    { label: "Email me",  icon: "email",    url: "mailto:gregg.nickel@gmail.com" },
    { label: "LinkedIn",  icon: "linkedin", url: "https://www.linkedin.com/in/gregg-nickel" },
    { label: "Résumé",    icon: "resume",   url: "files/Gregg_Nickel_Professional_Resume.pdf" },
    { label: "GitHub",    icon: "github",   url: "https://github.com/greggnickel-collab" },
    { label: "Tulsa, OK", icon: "location" },            // no url = shown as plain text
  ],
  contactBlurb: "I'm always happy to talk about business applications, process automation, or new opportunities.",

  // ---------- Currently working on ----------
  // status examples: "In progress", "Launching Q1 2027", "Research phase"
  current: [
    {
      title: "AI-Assisted Business Automation",
      status: "Learning & building",
      org: "Independent",
      dates: "2026 – present",
      description: "Exploring how AI tools like Claude can speed up application administration, documentation, and workflow automation. Recently completed Anthropic's AI Fluency, Claude Code 101, and Claude Cowork courses.",
      tags: ["Claude", "AI", "Automation"],
    },
    {
      title: "This Portfolio Site",
      status: "Live",
      org: "Personal project",
      dates: "2026",
      description: "A lightweight GitHub Pages site built with Claude Code, designed so every update is a simple text edit.",
      tags: ["GitHub Pages", "Claude Code"],
      link: "https://github.com/greggnickel-collab/greggnickel-collab.github.io",
      linkLabel: "View source",
    },
  ],

  // ---------- Past projects ----------
  // tags become filter buttons above the project list.
  // image is optional: e.g. "images/project1.jpg"
  past: [
    {
      title: "Salesforce Administration & Release Management",
      role: "Application Analyst III",
      org: "OneNeck IT Solutions / US Signal",
      dates: "2022 – 2026",
      description: "Implemented enhancements and resolved user issues across sales, service, and finance processes in an Agile SDLC environment. As Release Manager, moved projects from development through UAT and into production using Gearset.",
      tags: ["Salesforce", "Release Management"],
    },
    {
      title: "Dynamics 365 CE Administration",
      role: "Primary Administrator",
      org: "OneNeck IT Solutions / US Signal",
      dates: "2022 – 2026",
      description: "Served as primary administrator for Microsoft Dynamics 365 CE, delivering requested fixes and process enhancements, and supporting users through documentation and training.",
      tags: ["Dynamics 365"],
    },
    {
      title: "HR, Legal & Billing Automation",
      role: "Application Analyst III",
      org: "OneNeck IT Solutions / US Signal",
      dates: "2022 – 2026",
      description: "Designed automated solutions for HR, Legal, and Billing teams using Microsoft Forms, SharePoint, and Power Automate, replacing manual request and approval steps.",
      tags: ["Power Platform", "SharePoint"],
    },
    {
      title: "Enterprise Application Administration",
      role: "Application Analyst III",
      org: "Matrix Service Company",
      dates: "2016 – 2022",
      description: "Primary administrator across multiple platforms in cloud, on-premise, and Citrix environments. Managed upgrade lifecycles and annual maintenance agreements, provided escalated SME support, and guided departments through software selection.",
      tags: ["Application Admin"],
    },
    {
      title: "Access Control, Document Control & Safety Reporting",
      role: "Application Analyst III",
      org: "Matrix Service Company",
      dates: "2016 – 2022",
      description: "Architected and supported solutions for access control, document control, safety incident reporting, and process automation.",
      tags: ["Application Admin", "Power Platform"],
    },
    {
      title: "Acquisitions & Software Deployments",
      role: "IT Project Manager",
      org: "Matrix Service Company",
      dates: "2013 – 2016",
      description: "Managed IT projects ranging from company acquisitions to software deployments, using Microsoft Project for timelines, budgets, and resources, and helped develop project standards to improve efficiency and visibility.",
      tags: ["Project Management"],
    },
    {
      title: "SharePoint Business Intelligence Portal",
      role: "SharePoint Business Analyst",
      org: "Alliance Coal",
      dates: "2013",
      description: "Helped design and build a BI portal on SharePoint 2013, prototyped applications in Axure, built Nintex workflows, trained users, and supported testing of the SharePoint 2010 to 2013 intranet upgrade.",
      tags: ["SharePoint"],
    },
  ],

  // ---------- About ----------
  // Each string is one paragraph.
  bio: [
    "I'm a business applications and systems professional with extensive experience supporting Salesforce, Microsoft Dynamics 365 CE, SharePoint, and the Microsoft Power Platform across sales, finance, HR, legal, and operations.",
    "My background spans application administration, release management, process automation, software upgrades, user support, and cross-functional project delivery, in both remote and on-site roles. Earlier in my career I worked in IT project management and business analysis, and my graduate studies focused on organizational development.",
  ],
  skills: [
    "Salesforce", "Dynamics 365 CE", "Power Automate", "Power Apps", "SharePoint Online",
    "Release Management", "Gearset / Copado", "UAT & Deployment", "Process Automation",
    "Power BI", "SSRS", "Jira", "Project Management", "User Training", "Claude",
  ],

  education: [
    { degree: "Master of Human Relations", school: "University of Oklahoma · Tulsa, OK", year: "1999 – 2002", details: "Focus in organizational development" },
    { degree: "Bachelor of Liberal Studies, Administrative Leadership", school: "University of Oklahoma · Tulsa, OK", year: "1997 – 1999" },
  ],

  // Add date: "2025", expires: "2027", or url: "https://..." (verification link) to any of these.
  certifications: [
    { name: "Salesforce Certified Platform Administrator", issuer: "Salesforce" },
    { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic" },
    { name: "Claude Code 101", issuer: "Anthropic" },
    { name: "Introduction to Claude Cowork", issuer: "Anthropic" },
  ],

};

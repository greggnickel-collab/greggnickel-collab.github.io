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
  Everything below is PLACEHOLDER content — replace it with your own.
*/

window.SITE = {

  // ---------- Header ----------
  name: "Gregg Nickel",
  title: "Your Job Title · Your Specialty",
  summary: "A one- or two-sentence introduction: what you do, who you do it for, and what you're known for.",
  photo: "",               // e.g. "images/headshot.jpg" (put the file in the images folder). Leave "" to show initials.

  // ---------- Contact ----------
  // The first three items that have a url also appear as buttons at the top of the page.
  // icon options: email, linkedin, github, phone, location, resume, link
  contact: [
    { label: "Email me",  icon: "email",    url: "mailto:you@example.com" },
    { label: "LinkedIn",  icon: "linkedin", url: "https://www.linkedin.com/in/your-profile" },
    { label: "GitHub",    icon: "github",   url: "https://github.com/greggnickel-collab" },
    { label: "Résumé",    icon: "resume",   url: "" },   // hidden while url is "". e.g. "files/resume.pdf"
    { label: "City, State", icon: "location" },          // no url = shown as plain text
  ],
  contactBlurb: "I'm always happy to talk about new projects, collaborations, or opportunities.",

  // ---------- Currently working on ----------
  // status examples: "In progress", "Launching Q1 2027", "Research phase"
  current: [
    {
      title: "Current Project One",
      status: "In progress",
      role: "Lead",
      org: "Company or Client",
      dates: "2026 – present",
      description: "What you're building or solving, and why it matters.",
      tags: ["Skill A", "Tool B"],
      link: "",            // optional URL
    },
    {
      title: "Current Project Two",
      status: "Planning",
      role: "Contributor",
      org: "Personal project",
      dates: "2026",
      description: "A short description of the goal and where it stands now.",
      tags: ["Skill C"],
    },
  ],

  // ---------- Past projects ----------
  // tags become filter buttons above the project list.
  // image is optional: e.g. "images/project1.jpg"
  past: [
    {
      title: "Past Project One",
      role: "Project Manager",
      org: "Company Name",
      dates: "2024 – 2025",
      description: "What you did and the result. Numbers help, e.g. 'cut processing time by 40%'.",
      tags: ["Skill A", "Leadership"],
      link: "",
      image: "",
    },
    {
      title: "Past Project Two",
      role: "Analyst",
      org: "Company Name",
      dates: "2023",
      description: "Another accomplishment: the problem, your approach, and the outcome.",
      tags: ["Tool B", "Data"],
    },
    {
      title: "Past Project Three",
      role: "Consultant",
      org: "Client Name",
      dates: "2022",
      description: "A third example of your work.",
      tags: ["Skill A", "Data"],
    },
  ],

  // ---------- About ----------
  // Each string is one paragraph.
  bio: [
    "A few sentences about your background: where you've worked, what you focus on, and what you enjoy about your work.",
    "Optionally, a second paragraph on what you're looking for next or what you do outside of work.",
  ],
  skills: ["Skill A", "Skill B", "Tool B", "Leadership", "Data"],

  education: [
    { degree: "Degree, Field of Study", school: "University Name", year: "2015", details: "" },
    { degree: "Degree, Field of Study", school: "College Name",    year: "2011" },
  ],

  certifications: [
    { name: "Certification Name", issuer: "Issuing Organization", date: "2024", expires: "2027", url: "" },
    { name: "Another Certification", issuer: "Issuing Organization", date: "2022" },
  ],

};

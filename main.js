const translations = {
    de: {
        nav_work: "Arbeiten",
        nav_about: "Über mich",
        hero_title: "Hallo, ich bin Mehak Rani.",
        hero_subtitle: "Visueller-Experiential-Design-Masterstudentin mit Schwerpunkt auf Grafik- und Digitaldesign. <br> Auf der Suche nach einem Design-Praktikum in Deutschland.",
        about_title: "Über mich & Lebenslauf",
        about_summary: "Vertraut mit der Entwicklung von visuellen Konzepten, Layouts und grundlegenden Designsystemen durch akademische und selbstinitiierte Projekte. Sicher im Umgang mit Design-Tools für Layout, Typografie und visuelles Storytelling. Neugierig, detailorientiert und motiviert, in einem professionellen Studio-Umfeld zu lernen. Auf der Suche nach einem Design-Praktikum in Deutschland, um praktische Erfahrung und internationale Einblicke zu sammeln.",
        exp_title: "Berufserfahrung",
        exp_role1: "Praktikantin Grafikdesign / Designassistent",
        exp_date1: "März 2014 - April 2025", 
        edu_title: "Ausbildung",
        edu_degree1: "Masterstudium in Visuellem & Experientiellem Design",
        edu_uni1: "Unitedworld Institute of Design, Ahmedabad",
        edu_date1: "Jul 2025 - Aktuell",
        edu_degree2: "Bachelor in Germanistik (Honours)",
        edu_uni2: "Universität Delhi, Delhi",
        edu_date2: "Juli 2019 - Mai 2022",
        skills_title: "Technische Fähigkeiten",
        skills_list: "Adobe Photoshop, Adobe Illustrator, Adobe InDesign",
        lang_title: "Sprachkenntnisse",
        lang_list: "Hindi (C1), Deutsch (B1), Englisch (B2)",
        hobbies_title: "Hobbys",
        hobbies_list: "Malerei, Tanzen, Reisen, Kochen",
        cert_title: "Zertifikate",
        cert_list: "Bachelorabschluss in Germanistik, IELTS",
        work_title: "Ausgewählte Arbeiten",
        work_desc: "Klassenzimmer-Projekte, die den Designprozess von der Konzeption bis zur Umsetzung zeigen.",
        proj_pack: "Verpackungsdesign",
        proj_uiux: "UI/UX Design",
        proj_poster: "Plakatdesign",
        view_project: "Projekt ansehen",
        proj_overview: "Projektübersicht",
        proj_process: "Designprozess",
        proj_outcome: "Ergebnis",
        back_home: "&larr; Zurück",
        pack_title: "Verpackungsdesign",
        pack_desc: "Ein ganzheitliches Verpackungskonzept, das Ästhetik mit funktionalem Design verbindet.",
        pack_proc_text: "Der Prozess umfasste Marktforschung, Skizzieren von Konzepten, strukturelles Prototyping und abschließendes grafisches Layout.",
        uiux_title: "UI/UX Design",
        uiux_desc: "Eine intuitive digitale Anwendung, fokussiert auf benutzerzentriertes Design und klare Informationsarchitektur.",
        uiux_proc_text: "Gestartet mit User Research und Personas, gefolgt von User Flows, Wireframing, interaktivem Prototyping und UI-Design.",
        poster_title: "Plakatdesign",
        poster_desc: "Visuelles Storytelling durch typografische und grafische Elemente.",
        poster_proc_text: "Von groben Thumbnails über Rastererstellung bis hin zur typografischen Feinabstimmung im minimalistischen Stil."
    },
    en: {
        nav_work: "Work",
        nav_about: "About Me",
        hero_title: "Hello, I am Mehak Rani.",
        hero_subtitle: "Visual Experiential Design Master's student focusing on graphic and digital design. <br> Looking for a design internship in Germany.",
        about_title: "About & Resume",
        about_summary: "Familiar with the development of visual concepts, layouts, and basic design systems through academic and self-initiated projects. Confident in using design tools for layout, typography, and visual storytelling. Curious, detail-oriented, and motivated to learn in a professional studio environment. Looking for a design internship in Germany to gain practical experience and international insights.",
        exp_title: "Work Experience",
        exp_role1: "Graphic Design Intern / Design Assistant",
        exp_date1: "March 2014 - April 2025",
        edu_title: "Education",
        edu_degree1: "Master's in Visual & Experiential Design",
        edu_uni1: "Unitedworld Institute of Design, Ahmedabad",
        edu_date1: "Jul 2025 - Present",
        edu_degree2: "Bachelor in German Studies (Honours)",
        edu_uni2: "University of Delhi, Delhi",
        edu_date2: "July 2019 - May 2022",
        skills_title: "Technical Skills",
        skills_list: "Adobe Photoshop, Adobe Illustrator, Adobe InDesign",
        lang_title: "Languages",
        lang_list: "Hindi (C1), German (B1), English (B2)",
        hobbies_title: "Hobbies",
        hobbies_list: "Painting, Dancing, Traveling, Cooking",
        cert_title: "Certificates",
        cert_list: "Bachelor's Degree in German Studies, IELTS",
        work_title: "Selected Work",
        work_desc: "Classroom projects showcasing the design process from concept to execution.",
        proj_pack: "Packaging Design",
        proj_uiux: "UI/UX Design",
        proj_poster: "Poster Design",
        view_project: "View Project",
        proj_overview: "Project Overview",
        proj_process: "Design Process",
        proj_outcome: "Outcome",
        back_home: "&larr; Back",
        pack_title: "Packaging Design",
        pack_desc: "A holistic packaging concept combining aesthetics with functional design.",
        pack_proc_text: "The process involved market research, concept sketching, structural prototyping, and final graphic layout.",
        uiux_title: "UI/UX Design",
        uiux_desc: "An intuitive digital application focused on user-centric design and clear information architecture.",
        uiux_proc_text: "Started with user research and personas, followed by user flows, wireframing, interactive prototyping, and UI design.",
        poster_title: "Poster Design",
        poster_desc: "Visual storytelling through typographic and graphic elements.",
        poster_proc_text: "From rough thumbnails to grid creation and typographic fine-tuning in a minimalist style."
    }
};

let currentLang = 'de'; // Default to German for Germany

document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("lang-toggle");
    
    function updateLangs() {
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            // use innerHTML to allow <br> tags
            element.innerHTML = translations[currentLang][key];
        });
        document.documentElement.lang = currentLang;
    }

    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === 'de' ? 'en' : 'de';
        updateLangs();
    });

    // Initialize
    updateLangs();
});

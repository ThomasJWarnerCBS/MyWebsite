// Language content object
const languageContent = {
    en: {
        heading: "About Me",
        greeting: "Hi, I'm Thomas 👋",
        paragraph1: "Half Faroese, half English, living in Copenhagen and studying Business & IT at CBS.",
        paragraph2: "I love turning small ideas into real, tangible things — whether that's a portfolio website or a wooden bench that fits perfectly in my corridor.",
        paragraph3: "I'm creative, friendly, & patient, and usually the one people come to when they hit a wall of frustration — I always aim to make things feel lighter, not harder.",
        paragraph4: "Right now, I'm building this site to help me land a student job where I can learn, grow, and be mentored as a developer."
    },
    fo: {
        heading: "Um meg",
        greeting: "Halló, eg eiti Thomas 👋",
        paragraph1: "Hálvur føroyskur, hálvur enskur, búgvandi í Keypmannahavn og lesandi Búskab & KT á CBS.",
        paragraph2: "Eg elski at venda smá hugskot til veruligar, tangiblir lutir — um tað so er ein portfolio heimasíða ella ein træbonkur, sum passar perfekt í míni gongd.",
        paragraph3: "Eg eri kreativur, blívur og tolsamur, og vanliga tann, fólk koma til, tá tey hitta frustration — eg sikti altíð at gera ting lættari, ikki tyngri.",
        paragraph4: "Beint nú byggi eg hesa síðuna fyri at hjálpa mær at fáa eitt lestrararbeiði, har eg kann læra, veksa og verða mentoraður innan KT menning."
    },
    da: {
        heading: "Om mig",
        greeting: "Hej, jeg hedder Thomas 👋",
        paragraph1: "Halvt færøsk, halvt engelsk, boende i København og studerende Business & IT på CBS.",
        paragraph2: "Jeg elsker at omdanne små idéer til rigtige, håndgribelige ting — hvad enten det er en portfolio-hjemmeside eller en træbænk, der passer perfekt i min gang.",
        paragraph3: "Jeg er kreativ, venlig og tålmodig, og normalt den, folk kommer til, når de rammer frustration — jeg stræber altid efter at gøre tingene lettere, ikke sværere.",
        paragraph4: "Lige nu bygger jeg dette site for at hjælpe mig med at lande et studiejob, hvor jeg kan lære, vokse og blive mentoret som udvikler."
    }
};

// Current language state
let currentLanguage = 'en';

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update content
    const content = languageContent[lang];
    
    // Update About Me section
    const aboutSection = document.querySelector('#aboutme');
    if (aboutSection && content) {
        aboutSection.innerHTML = `
            <h3>${content.heading}</h3>
            <p>${content.greeting}</p>
            <p>${content.paragraph1}</p>
            <p>${content.paragraph2}</p>
            <p>${content.paragraph3}</p>
            <p>${content.paragraph4}</p>
        `;
    }
    
    // Update active flag styling
    document.querySelectorAll('.flag-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Find and activate the correct flag button
    const buttons = document.querySelectorAll('.flag-button');
    const langMap = { en: 0, fo: 1, da: 2 };
    if (buttons[langMap[lang]]) {
        buttons[langMap[lang]].classList.add('active');
    }
    
    console.log(`Switched to ${lang === 'en' ? 'English' : lang === 'fo' ? 'Faroese' : 'Danish'}`);
}

// Updated experience function for the new card-based layout
function showExperience(role) {
    // Hide all details first
    const allDetails = document.querySelectorAll('.experience-details');
    allDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    // Show the selected experience details
    let targetId;
    switch(role) {
        case 'Databases':
            targetId = 'databases-details';
            break;
        case 'programming':
            targetId = 'programming-details';
            break;
    }

    if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.add('active');
        }
    }
}

// Contact dropdown functionality
function toggleContactDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    const button = document.getElementById('contact-button');
    
    dropdown.classList.toggle('show');
    button.classList.toggle('active');
}

// Close dropdown when clicking outside
function closeDropdownOnClickOutside(event) {
    const dropdown = document.getElementById('dropdown-content');
    const button = document.getElementById('contact-button');
    
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
}

// Initialize dropdown functionality and set default language when page loads
document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contact-button');
    
    if (contactButton) {
        contactButton.addEventListener('click', toggleContactDropdown);
        document.addEventListener('click', closeDropdownOnClickOutside);
    }
    
    // Set English as default and show it as active
    switchLanguage('en');
});
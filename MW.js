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

// Initialize dropdown functionality when page loads
document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contact-button');
    
    if (contactButton) {
        contactButton.addEventListener('click', toggleContactDropdown);
        document.addEventListener('click', closeDropdownOnClickOutside);
    }
});
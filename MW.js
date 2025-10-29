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
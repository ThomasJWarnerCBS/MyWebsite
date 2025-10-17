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
        case 'support':
            targetId = 'support-details';
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

// Photo slideshow functionality - CLICK TO CHANGE
const photoSlideshow = {
    photos: [
        'Images/ProfilPics/photo1.png',
        'Images/ProfilPics/photo2.png',
        'Images/ProfilPics/photo3.png',
        'Images/ProfilPics/photo4.png'
    ],
    currentIndex: 0,

    // Initialize the slideshow when page loads
    init() {
        this.setupClickHandler();
        this.addClickIndicator();
    },

    // Change to next photo
    nextPhoto() {
        this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        this.updatePhoto();
    },

    // Update the image source
    updatePhoto() {
        const imageElement = document.getElementById('profile-image');
        const photoContainer = document.querySelector('.photo-slideshow');
        if (imageElement) {
            imageElement.src = this.photos[this.currentIndex];
            // Add fade transition effect
            imageElement.style.opacity = '0';
            setTimeout(() => {
                imageElement.style.opacity = '1';
            }, 100);
            
            // Update photo counter (optional)
            if (photoContainer) {
                photoContainer.setAttribute('data-photo-count', `${this.currentIndex + 1}/${this.photos.length}`);
            }
        }
    },

    // Set up click handler for the image
    setupClickHandler() {
        const photoContainer = document.querySelector('.photo-slideshow');
        if (photoContainer) {
            photoContainer.style.cursor = 'pointer';
            photoContainer.addEventListener('click', () => {
                this.nextPhoto();
            });
        }
    },

    // Add visual indicator that image is clickable
    addClickIndicator() {
        const photoContainer = document.querySelector('.photo-slideshow');
        if (photoContainer) {
            // Add hover effect to show it's clickable
            photoContainer.addEventListener('mouseenter', () => {
                const img = photoContainer.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1.02)';
                    img.style.filter = 'brightness(1.1)';
                }
            });
            
            photoContainer.addEventListener('mouseleave', () => {
                const img = photoContainer.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1)';
                    img.style.filter = 'brightness(1)';
                }
            });
        }
    }
};

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
    photoSlideshow.init();
});
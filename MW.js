function showExperience(role) {
    const content = {
        Databases: "<h4>Database Experience</h4><ul><li>Extensive history of database management</li><li> Azure SQL Databases</li><li>Atleast 3rd Form Normaliasation - optionally 4th and 5th. </li></ul>",
        support: "<h4>Support Experience</h4><ul><li>Provided technical support to over 100 clients.</li><li>Resolved customer issues with a 95% satisfaction rate.</li></ul>",
        programming: "<h4>Programming Experience</h4><ul><li>Developed web applications using JavaScript, HTML, and CSS.</li><li>Collaborated on open-source projects and contributed to code reviews.</li></ul>"
    };
    document.getElementById("experience-content").innerHTML = content[role] || "<p>Select a role to see experience details.</p>";
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
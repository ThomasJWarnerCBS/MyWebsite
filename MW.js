function showExperience(role) {
    const content = {
        Databases: "<h4>Database Experience</h4><ul><li>Extensive history of database management</li><li> Azure SQL Databases</li><li>Atleast 3rd Form Normaliasation - optionally 4th and 5th. </li></ul>",
        support: "<h4>Support Experience</h4><ul><li>Provided technical support to over 100 clients.</li><li>Resolved customer issues with a 95% satisfaction rate.</li></ul>",
        programming: "<h4>Programming Experience</h4><ul><li>Developed web applications using JavaScript, HTML, and CSS.</li><li>Collaborated on open-source projects and contributed to code reviews.</li></ul>"
    };
    document.getElementById("experience-content").innerHTML = content[role] || "<p>Select a role to see experience details.</p>";
}

// Photo slideshow functionality - FIXED FILE EXTENSIONS
const photoSlideshow = {
    photos: [
        'Images/ProfilPics/photo1.png',  // Changed from .jpg to .png
        'Images/ProfilPics/photo2.png',  // Changed from .jpg to .png
        'Images/ProfilPics/photo3.png',  // Changed from .jpg to .png
        'Images/ProfilPics/photo4.png'   // Changed from .jpg to .png
    ],
    currentIndex: 0,
    intervalId: null,

    // Initialize the slideshow when page loads
    init() {
        this.startSlideshow();
    },

    // Change to next photo
    nextPhoto() {
        this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        this.updatePhoto();
    },

    // Update the image source
    updatePhoto() {
        const imageElement = document.getElementById('profile-image');
        if (imageElement) {
            imageElement.src = this.photos[this.currentIndex];
            // Add fade transition effect
            imageElement.style.opacity = '0';
            setTimeout(() => {
                imageElement.style.opacity = '1';
            }, 100);
        }
    },

    // Start automatic slideshow
    startSlideshow() {
        // Change photo every 3 seconds (3000ms)
        this.intervalId = setInterval(() => {
            this.nextPhoto();
        }, 3000);
    },

    // Stop slideshow (useful for hover effects)
    stopSlideshow() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
};

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
    photoSlideshow.init();
    
    // Optional: Pause slideshow on hover, resume when not hovering
    const photoContainer = document.querySelector('.photo-slideshow');
    if (photoContainer) {
        photoContainer.addEventListener('mouseenter', () => {
            photoSlideshow.stopSlideshow();
        });
        
        photoContainer.addEventListener('mouseleave', () => {
            photoSlideshow.startSlideshow();
        });
    }
});
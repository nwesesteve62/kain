// --- script.js ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Hero Background Image Slider Effect
    // Replicating the changing images behind the text as seen in the video
    const heroSection = document.getElementById('hero');
    const backgroundImages = [
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1920&q=80', // Dog with vet
        'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920&q=80', // Dog looking out window
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1920&q=80'  // Happy dog
    ];
    
    let currentImageIndex = 0;

    // Change background image every 5 seconds
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        heroSection.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    }, 5000);


    // 2. Sticky Header Styling on Scroll
    // Adds a subtle shadow when user scrolls down
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // 3. Mobile Hamburger Menu Toggle (Basic implementation)
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        // In a full build, this would slide out a mobile navigation pane
        alert('Mobile navigation menu clicked!');
    });

    // 4. Map Hover Interaction Logic
    // Ensures that the tooltips remain visible while hovered, mimicking the pop-out behavior
    const mapDots = document.querySelectorAll('.map-dot');
    
    mapDots.forEach(dot => {
        dot.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.map-tooltip');
            if (tooltip) {
                // Adjust position dynamically if near edges (optional enhancement)
                const rect = tooltip.getBoundingClientRect();
                if (rect.right > window.innerWidth) {
                    tooltip.style.left = 'auto';
                    tooltip.style.right = '30px';
                }
            }
        });
    });

});
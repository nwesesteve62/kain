document.addEventListener('DOMContentLoaded', () => {
    
    // Tab Switching Logic (Ship vs Track)
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            // Remove active classes
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to selected
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Simple Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        // Add specific mobile styles via JS or CSS class toggle
        if(navLinks.classList.contains('mobile-active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '1rem';
            navLinks.style.borderBottom = '1px solid #e2e8f0';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Form Button Logic
    document.querySelector('.btn-full').addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Calculating...';
        setTimeout(() => {
            alert('Your shipping estimate is $24.50 (Standard Carrier)');
            this.innerHTML = 'Get Instant Quote';
        }, 1500);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdown = document.querySelector('.ds-dropdown');
    const dropdownToggle = document.querySelector('.ds-dropdown-toggle');

    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Mobile menu functionality
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Profile icon click (only functional element)
    const profileIcon = document.getElementById('profileIcon');
    profileIcon.addEventListener('click', function() {
        alert('Profile clicked! This is the only functional element as requested.');
    });
});
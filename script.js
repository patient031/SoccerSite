// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset for navbar height
            behavior: 'smooth'
        });
    });
});

// Image Slider for Team Photos
let currentImageIndex = 0;
const teamImages = [
    "Team.jpg", // Add the image file paths here
    "team-photo2.jpg", 
    "team-photo3.jpg"
];
const teamPhoto = document.querySelector('.history-content img.team-photo');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % teamImages.length;
    teamPhoto.src = teamImages[currentImageIndex];
}

setInterval(changeImage, 5000); // Change image every 5 seconds

// Dynamic Display of Upcoming Fixtures
const fixtures = [
    { match: "Thunder Strykers vs Young Stars", date: "Jan 23, 2025" },
    { match: "Thunder Strykers vs Lexington Congolese", date: "May 3, 2025" },
    { match: "Thunder Strykers vs West Indies", date: "July 23, 2025" }
];

const fixturesList = document.querySelector('#fixtures ul');

// Adding a hover effect to player cards
const playerCards = document.querySelectorAll('.player-card');

playerCards.forEach(card => {
    card.addEventListener('mouseover', function () {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });

    card.addEventListener('mouseout', function () {
        card.style.transform = 'scale(1)';
    });
});

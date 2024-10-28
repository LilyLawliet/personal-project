// Function to apply fade-in effect after the page loads
window.onload = function() {
    const heroSection = document.querySelector('.hero-section');
    const navBar = document.querySelector('.navbar');

    
    // Delay for half a second before adding the fade-in class
    setTimeout(() => {
        heroSection.classList.add('fade-in');
        navBar.classList.add('fade-in');
    }, 500); // 500 milliseconds = 0.5 seconds
};

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const swipeDown = document.querySelector(".swipe-down");
        swipeDown.classList.add("fade-in");
    }, 5000); // 5-second delay
});

// JavaScript to control fading
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Current scroll position
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    
    // Calculate the opacity for hero section
    let heroOpacity = 1 - scrollY / heroHeight;
    heroOpacity = Math.max(heroOpacity, 0); // Ensure opacity doesn't go below 0
    
    // Calculate the opacity for section-two
    let sectionTwoOpacity = scrollY / heroHeight;
    sectionTwoOpacity = Math.min(sectionTwoOpacity, 1); // Ensure opacity doesn't go above 1
    
    // Apply opacity changes
    document.querySelector('.hero-section').style.opacity = heroOpacity;
    document.querySelector('.section-two').style.opacity = sectionTwoOpacity;
});


const projects = [
    { image: 'assets/quizz-app.jpg', name: 'Quiz App' },
    { image: 'assets/react-page.png', name: 'React Page' },
    { image: 'assets/snake-game.png', name: 'Snake Game' },
    { image: 'assets/Blog-web.png', name: 'Blog website' },
];

let currentProjectIndex = 0;
const projectImage = document.getElementById('projectImage');
const projectName = document.getElementById('projectName');
const projectCounter = document.getElementById('projectCounter');

// Function to show the next project with slide effect
function nextProject() {
    slideImage('left');
    setTimeout(() => {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        updateProject();
        projectImage.classList.remove('slide-left');
    }, 400); // Match CSS transition time
}

// Function to show the previous project with slide effect
function prevProject() {
    slideImage('right');
    setTimeout(() => {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        updateProject();
        projectImage.classList.remove('slide-right');
    }, 400); // Match CSS transition time
}

// Function to update project image, name, and counter
function updateProject() {
    projectImage.src = projects[currentProjectIndex].image;
    projectName.textContent = projects[currentProjectIndex].name;
    projectCounter.textContent = `${currentProjectIndex + 1} / ${projects.length}`;
}

// Function to slide image based on direction
function slideImage(direction) {
    projectImage.classList.remove('slide-left', 'slide-right');
    if (direction === 'left') {
        projectImage.classList.add('slide-left');
    } else {
        projectImage.classList.add('slide-right');
    }
}

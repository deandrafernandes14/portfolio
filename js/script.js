// Scroll fade animation
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    faders.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add('active');
        }
    });
});

// Typing animation
const typedText = document.querySelector(".typed-text");

const textArray = [
    "Engineering student building intelligent systems.",
    "AI enthusiast and embedded systems developer.",
    "Creative visual storyteller and photographer."
];

let textIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textIndex].length){
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 40);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if(charIndex > 0){
        typedText.textContent = textArray[textIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, 20);
    } else {
        textIndex++;
        if(textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, 1500);
});

// Scroll progress indicator
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector(".scroll-progress").style.width = scrollPercent + "%";
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }
    });
});

window.addEventListener("DOMContentLoaded", function() {
    // Get the button:
    const mybutton = document.querySelector('.top-button');

    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
        if (window.scrollY > 200) {
            mybutton.style.opacity = '1';
            mybutton.style.pointerEvents = 'all';
        } else {
            mybutton.style.opacity = "0";
            mybutton.style.pointerEvents = 'none';
        }
    }


}, false);

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
} 

function scrollSection(sectionName) {
    const section = document.getElementById(sectionName);

    if (sectionName != null) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    }
    else {
        console.log(sectionName + " not found bobis");
    }
}

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

    if (section != null) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    else {
        console.log(sectionName + " not found bobis");
    }
}

function openSection(evt, sectionName) {
    var i, tabcontent, tablinks;

    const section = document.getElementById(sectionName);
    if (section === null) {
        console.log("nada bobin");
        return;
    }

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    section.style.display = "block";
    evt.currentTarget.className += " active";

    scrollSection(sectionName);
}

function summonConfetti(ele) {
    if (ele == null) {
        return;
    }

    const rect = ele.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;

    console.log("x: " + x + ", y: " + y);

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x / window.innerWidth + 0.155, y: y / window.innerHeight + 0.1},
    });
}

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


    getDoxxImage();

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
    disableHeightUpdate();
}

var heightUpdate = true;

function disableHeightUpdate() {
    heightUpdate = false;
}

const initHeight = window.innerHeight;

function summonConfetti(ele) {
    if (ele == null) {
        return;
    }

    const rect = ele.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;

    height = window.innerHeight;

    if (!heightUpdate) {
        height = initHeight
    }

    if (window.innerHeight > window.innerWidth) {
        confetti({
            particleCount: 50,
            spread: 50,
            origin: { x: (x + window.innerWidth * 0.17) / window.innerWidth, y: (y + height * 0.15) / height},
        });
    } else {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: (x + window.innerWidth * 0.11) / window.innerWidth, y: (y + height * 0.3) / height},
        });
    }
}

const params = new URLSearchParams(window.location.search);
console.log(params.get('no-doxx'));

function getDoxxImage() {
    const img = document.querySelector('.my-image');
    if (img != null) {
        if (params.get('no-doxx')) {
            img.src = "https://res.cloudinary.com/dyuhkqnne/image/upload/v1737410320/dont-get-doxxed_qqtiii.png";
        }
        else {
            img.src = "https://res.cloudinary.com/dyuhkqnne/image/upload/v1737410320/get-doxxed_cwpy04.jpg";
        }
    }
}

function destroyImage(evt) {
    console.log(!params.get('no-doxx'));
    if (!params.get('no-doxx')) {
        evt.currentTarget.style.opacity = 0;
    }
}

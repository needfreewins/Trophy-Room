const losers = [ 
    {
        src: "https://i.ibb.co/qF7pRG5s/Branky-Unicorn.png",
        link: "https://www.reddit.com/user/Wise_Pomegranate_713/",
        name: "Branky"
    },
    { 
        src: "https://i.ibb.co/sdPVttJG/cray.png",
        link: "",
        name: "Cray"
    },
    {
        src: "https://i.ibb.co/1JzXccvb/dum-lil-defeatslut.png",
        link: "https://www.reddit.com/user/dum_lil_defeatslut/",
        name: "dum_lil_defeatslut"
    },
    {
        src: "https://i.ibb.co/XrMCXDr0/Teal-octopus.png",
        link: "https://www.reddit.com/user/Teal-octopus/",
        name: "Teal Octopus"
    },
    {
        src: "https://i.ibb.co/QqM7pFh/boundinwonderland.png",
        link: "https://www.reddit.com/user/boundinwonderland/",
        name: "boundinwonderland"
    },
    {
        src: "https://i.ibb.co/M5Gd2ZZr/rp-babe.png",
        link: "https://www.reddit.com/user/rp___babe/",
        name: "rp___babe"
    },
    {
        src: "https://i.ibb.co/bjkJ32Bd/Tech-Savvy-Siren.png",
        link: "https://www.reddit.com/user/TechSavvySiren/",
        name: "TechSavvySiren"
    },
];

const winners = [
    {
        src: "https://i.ibb.co/zVPLdYHY/blazey.png",
        link: "https://www.reddit.com/user/MysticalBlaze22/",
        name: "Blazey"
    },
];

let currentIndex = { winners: 0, losers: 0 };

function showImage(category) {
    const container = document.getElementById(`${category}-container`);
    const images = category === 'winners' ? winners : losers;

    if (images.length === 0) return;

    container.innerHTML = `
        <div class="image-container" onclick="window.open('${images[currentIndex[category]].link}', '_blank')">
            <img src="${images[currentIndex[category]].src}" alt="${images[currentIndex[category]].name}" class="gallery-image">
            <div class="subtitle">${images[currentIndex[category]].name}</div>
        </div>
    `;
}

function nextImage(category) {
    const images = category === 'winners' ? winners : losers;
    currentIndex[category] = (currentIndex[category] + 1) % images.length;
    showImage(category);
}

function prevImage(category) {
    const images = category === 'winners' ? winners : losers;
    currentIndex[category] = (currentIndex[category] - 1 + images.length) % images.length;
    showImage(category);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully");

    const title = document.querySelector("h1");
    title.style.opacity = 0;
    setTimeout(() => {
        title.style.transition = "opacity 1s";
        title.style.opacity = 1;
    }, 500);

    showImage("winners");
    showImage("losers");
});
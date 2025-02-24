const losers = [ 
    {
        src: "https://cdn.discordapp.com/attachments/1339982036613599352/1342737444998479942/Branky_Unicorn.png?ex=67bab931&is=67b967b1&hm=4b44bfc05bf5dabbf86a2d34ef8e0ec8b2b7f05f72bda5ceba8d80c21a081a38&",
        link: "https://www.reddit.com/user/Wise_Pomegranate_713/",
        name: "Branky"
    },
    { 
        src: "https://cdn.discordapp.com/attachments/1339982036613599352/1342737446017699840/cray.png?ex=67bcb371&is=67bb61f1&hm=56a7d585418c266850032b5484f83aebc44bf259956e1bd867e1df4542825165&",
        link: "",
        name: "Cray"
    },
    {
        src: "https://cdn.discordapp.com/attachments/1339982036613599352/1342737447074795680/dum_lil_defeatslut.png?ex=67bcb372&is=67bb61f2&hm=095e4b34c9045fa5251258c5dfc548f6c9455ac0bdc1b0fbc497b2bea03a4c58&",
        link: "https://www.reddit.com/user/dum_lil_defeatslut/",
        name: "dum_lil_defeatslut"
    },
    {
        src: "https://cdn.discordapp.com/attachments/1339982036613599352/1342737447972245664/Teal-octopus.png?ex=67bcb372&is=67bb61f2&hm=ffa98f7b14a0ee633ea76d8227c4b7b654272a4b266f580e557744c84a6da01f&",
        link: "https://www.reddit.com/user/Teal-octopus/",
        name: "Teal Octopus"
    },
    {
        src: "https://cdn.discordapp.com/attachments/1339982036613599352/1342737444122136617/boundinwonderland.png?ex=67bcb371&is=67bb61f1&hm=1dde4151ee17210df711341de9f3b044a18a9dc50498738e7b35a599058a0303&",
        link: "https://www.reddit.com/user/boundinwonderland/",
        name: "boundinwonderland"
    },
    {
        src: "https://cdn.discordapp.com/attachments/1339982036613599352/1343443472862150790/rp___babe.png?ex=67bd4abb&is=67bbf93b&hm=4d6c210dfde1a4632aea4293602ebe8e4741860b141f368ea17e025a0396cce9&",
        link: "https://www.reddit.com/user/rp___babe/",
        name: "rp___babe"
    }
];

const winners = [
    {
        src: "https://cdn.discordapp.com/attachments/1339982036613599352/1342737442972897321/blazey.png?ex=67bcb371&is=67bb61f1&hm=6bf01fe01292ee39f425a2eea73d7f3f56e247fee980ade9fcb973e1d56c2a69&",
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

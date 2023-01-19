const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Web Dev",
    duration: "10 dias",
    thumb: "../public/thumb_hard-skills/web_dev.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  },
  {
    title: "CSS Tricks",
    duration: "12 dias",
    thumb: "../public/thumb_hard-skills/css-tricks.jpg",
    site_url: "https://css-tricks.com/guides/",
    category: "CSS"
  },
  {
    title: "Open props style",
    duration: "15 dias",
    thumb: "../public/thumb_hard-skills/open-props.jpg",
    site_url: "https://open-props.style/",
    category: "CSS"
  },
  {
    title: "Glitch",
    duration: "8 dias",
    thumb: "../public/thumb_hard-skills/glitch.jpg",
    site_url: "https://glitch.com/",
    category: "Web Developer"
  },
  {
    title: "UI Design Daily",
    duration: "9 dias",
    thumb: "../public/thumb_hard-skills/ui-design-daily.jpg",
    site_url: "https://uidesigndaily.com/",
    category: "Design Templates"
  },
  {
    title: "React for Designers",
    duration: "3 dias",
    thumb: "../public/thumb_hard-skills/react-for-designers.jpg",
    site_url: "https://reactfordesigners.com/",
    category: "Web Developer"
  },
  {
    title: "Dev Resources",
    duration: "3 dias",
    thumb: "../public/thumb_hard-skills/dev-resources.jpg",
    site_url: "https://devresourc.es/",
    category: "Fullstack Developer"
  },
]

fullstacks.map((fullstack) => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("a.destino").href = fullstack.site_url;
  cardClone.querySelector("img").src = fullstack.thumb;
  cardClone.querySelector(".title").innerHTML = fullstack.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = fullstack.duration;
  cardClone.querySelector(".info > p.price").innerHTML = fullstack.category;
  sectionCards.appendChild(cardClone);
});

card.remove();



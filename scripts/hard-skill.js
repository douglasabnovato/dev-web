const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Guia Web Dev",
    duration: "10 dias",
    thumb: "../public/thumb_hard-skills/web_dev.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  },
  {
    title: "Guia CSS Tricks",
    duration: "12 dias",
    thumb: "../public/thumb_hard-skills/css-tricks.jpg",
    site_url: "https://css-tricks.com/guides/",
    category: "CSS"
  },
  {
    title: "Guia Open props style",
    duration: "15 dias",
    thumb: "../public/thumb_hard-skills/open-props.jpg",
    site_url: "https://open-props.style/",
    category: "CSS"
  },
  {
    title: "Guia Glitch",
    duration: "8 dias",
    thumb: "../public/thumb_hard-skills/glitch.jpg",
    site_url: "https://glitch.com/",
    category: "Web Developer"
  },
  {
    title: "Guia UI Design Daily",
    duration: "9 dias",
    thumb: "../public/thumb_hard-skills/ui-design-daily.jpg",
    site_url: "https://uidesigndaily.com/",
    category: "Design Templates"
  },
  {
    title: "Guia React for Designers",
    duration: "6 dias",
    thumb: "../public/thumb_hard-skills/react-for-designers.jpg",
    site_url: "https://reactfordesigners.com/",
    category: "Web Developer"
  },
  {
    title: "Guia Dev Resources",
    duration: "13 dias",
    thumb: "../public/thumb_hard-skills/dev-resources.jpg",
    site_url: "https://devresourc.es/",
    category: "Fullstack Developer"
  },
  {
    title: "Guia Headless UI",
    duration: "11 dias",
    thumb: "../public/thumb_hard-skills/headless.jpg",
    site_url: "https://headlessui.com/",
    category: "Frontend Developer"
  },
  {
    title: "Guia Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Guia Codepip",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/codepip.jpg",
    site_url: "https://codepip.com/",
    category: "CSS"
  },
  {
    title: "Guia Grid Malven",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/grid-malven.jpg",
    site_url: "https://grid.malven.co/",
    category: "CSS"
  },
  {
    title: "Guia Flex Malven",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/flex-malven.jpg",
    site_url: "https://flexbox.malven.co/",
    category: "CSS"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Grid by Example",
    duration: "14 dias",
    thumb: "../public/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
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



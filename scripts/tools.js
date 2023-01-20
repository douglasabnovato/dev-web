const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Discord",
    duration: "1 dia",
    thumb: "../files/thumb_tools/discord.jpg",
    site_url: "https://discord.com/",
    category: "Comunidade"
  },
  {
    title: "StackOverflow",
    duration: "2 dias",
    thumb: "../files/thumb_tools/stackoverflow.jpg",
    site_url: "https://stackoverflow.com/",
    category: "Comunidade"
  },
  {
    title: "Slack",
    duration: "1 dia",
    thumb: "../files/thumb_tools/slack.jpg",
    site_url: "https://slack.com/intl/pt-br",
    category: "Comunidade"
  },
  {
    title: "Pomodoro Online",
    duration: "1 dia",
    thumb: "../files/thumb_tools/pomodoro.jpg",
    site_url: "https://pomofocus.io/",
    category: "Gestão de Projeto"
  },
  {
    title: "Dontpad",
    duration: "1 dia",
    thumb: "../files/thumb_tools/dontpad.jpg",
    site_url: "https://dontpad.com/",
    category: "Gestão de Projeto"
  },
  {
    title: "Notion",
    duration: "1 dia",
    thumb: "../files/thumb_tools/notion.jpg",
    site_url: "https://www.notion.so/",
    category: "Gestão de Projeto"
  },
  {
    title: "Trello",
    duration: "1 dia",
    thumb: "../files/thumb_tools/trello.jpg",
    site_url: "https://trello.com/home",
    category: "Gestão de Projeto"
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



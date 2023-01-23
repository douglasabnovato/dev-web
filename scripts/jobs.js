const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Coodesh",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/coodesh.jpg",
    site_url: "https://coodesh.com/",
    category: "Developer"
  },
  {
    title: "Geekhunter",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/geekhunter.jpg",
    site_url: "https://www.geekhunter.com.br/vagas",
    category: "Developer"
  },
  {
    title: "Linkedin",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/linkedin.jpg",
    site_url: "https://www.linkedin.com/jobs/",
    category: "Developer"
  },
  {
    title: "Polywork",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/polywork.jpg",
    site_url: "https://coodesh.com/",
    category: "Developer"
  },
  {
    title: "Programadores de Juiz de Fora",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programadoresjuizdefora.jpg",
    site_url: "https://programador.emjuizdefora.com/oportunidades",
    category: "Developer"
  },
  {
    title: "Programathor",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programathor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "Bossabox",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/bossabox.jpg",
    site_url: "https://app.bossabox.com/profile/jobs/active-products",
    category: "Developer"
  },
  {
    title: "Impulso",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/impulso.jpg",
    site_url: "https://app.impulso.team/painel",
    category: "Developer"
  },
  {
    title: "trampos",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/trampos.jpg",
    site_url: "https://trampos.co/oportunidades/?tr=desenvolvedor",
    category: "Developer"
  },
  {
    title: "Revelo",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/revelo.jpg",
    site_url: "https://app.careers.revelo.com/#/international/positions/list",
    category: "Developer"
  },
  {
    title: "Movile",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/movile.jpg",
    site_url: "https://www.movile.com.br/carreiras-movile",
    category: "Developer"
  },
  {
    title: "Glassdoor",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/glassdoor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "aaaaaaaaaa",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programathor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "aaaaaaaaaa",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programathor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "aaaaaaaaaa",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programathor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "aaaaaaaaaa",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programathor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "aaaaaaaaaa",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programathor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
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



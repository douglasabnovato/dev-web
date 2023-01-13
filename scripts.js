const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const webs = [
  {
    title: "As melhores SOFT SKILLS para devs (que estão começando)",
    duration: "55 min 23 seg",
    thumb: "./thumb_web/photo-1.avif",
    video_url: "UF7RXzD4hvs"
  },
  {
    title: "Técnicas de estudo em programação",
    duration: "28 min 28 seg",
    thumb: "./thumb_web/photo-2.avif",
    video_url: "Fzwr1JcqFo4&t=33s"
  },
  {
    title: "O networking ajudou ele a ser reconhecido",
    duration: "38 min 48 seg",
    thumb: "./thumb_web/photo-3.avif",
    video_url: "5CCUnGl2CsY"
  },
  {
    title: "Fiz o desafio NLW e ganhei uma bolsa de estudos",
    duration: "35 min 22 seg",
    thumb: "./thumb_web/photo-4.avif",
    video_url: "hQuz11fzmS0"
  },
  {
    title: "Mercado dev - Rotinas e prioridades de estudo",
    duration: "22 min 30 seg",
    thumb: "./thumb_web/photo-5.avif",
    video_url: "zukkLobYGWg"
  },
  {
    title: "Acessibilidade no ecossistema de programação",
    duration: "1 hr 07 min 14 seg",
    thumb: "./thumb_web/photo-6.avif",
    video_url: "B_jepC7Eufo"
  },
  {
    title: "Dev júnior - Expectativa vs realidade",
    duration: "45 min 02 seg",
    thumb: "./thumb_web/photo-7.avif",
    video_url: "p-YtB2HzwEA"
  },
  {
    title: "Testes - Ferramentas práticas de testagem",
    duration: "55 min 46 seg",
    thumb: "./thumb_web/photo-8.avif",
    video_url: "IW84MB-9toU"
  },
  {
    title: "Se tivesse começado mais cedo, talvez não estivesse aqui hoje",
    duration: "50 min 00 seg",
    thumb: "./thumb_web/photo-9.avif",
    video_url: "NKsfW6vfeE4"
  },
  {
    title: "Trabalhando no front-end do Zé Delivery",
    duration: "39 min 18 seg",
    thumb: "./thumb_web/photo-10.avif",
    video_url: "aUI1C8D9WnA&t=27s"
  },
  {
    title: "7 Hábitos dos Devs que chegam no próximo nível",
    duration: "18 min 34 seg",
    thumb: "./thumb_web/photo-11.avif",
    video_url: "4JbdtlqkbaY"
  },
  {
    title: "Dicas para praticar e evoluir na programação web",
    duration: "23 min 53 seg",
    thumb: "./thumb_web/photo-12.avif",
    video_url: "V-6ff7Mzg98"
  },
  {
    title: "Nunca saí sem respostas da comunidade",
    duration: "36 min 22 seg",
    thumb: "./thumb_web/photo-13.avif",
    video_url: "M5f16tqYCqc"
  },
  {
    title: "Freelance: modelos de trabalho na carreira dev (feat. Bossabox)",
    duration: "58 min 46 seg",
    thumb: "./thumb_web/photo-14.avif",
    video_url: "Gw2XuEICJS8"
  },
  {
    title: "Vantagens e desvantagens do pair programming (feat. Take Blip)",
    duration: "51 min 44 seg",
    thumb: "./thumb_web/photo-15.avif",
    video_url: "MUAAqgObHuI"
  },
  {
    title: "Da escola de inglês para a programação",
    duration: "46 min 13 seg",
    thumb: "./thumb_web/photo-16.avif",
    video_url: "WoVXCbHL0Z4"
  },
]

const videos = [
  {
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    video_id: "GykTLqODQuU",
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
    video_id: "HN1UjzRSdBk",
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
    video_id: "rAzHvYnQ8DY",
  },
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
    video_id: "ghTrp1x_1As",
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
    video_id: "GSqR2i-Pq6o",
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
    video_id: "2alg7MQ6_sI",
  },
];

const reacts = [
  {}
]

const backends = [
  {}
]

const softskills = [
  {}
]

webs.map((web) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", web.video_url);
  cardClone.querySelector("img").src = web.thumb;
  cardClone.querySelector(".title").innerHTML = web.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = web.duration;
  cardClone.querySelector(".info > p.price").innerHTML = "Soft Skills";
  sectionCards.appendChild(cardClone);
});

videos.map((video) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = video.duration;
  cardClone.querySelector(".info > p.price").innerHTML = "Hard Skills";
  sectionCards.appendChild(cardClone);
});

card.remove();

const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`; 
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
}); 

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});

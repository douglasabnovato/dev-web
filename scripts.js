const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const softskills = [
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
    video_url: "Fzwr1JcqFo4"
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
    title: "Dev júnior - Expectativa vs realidade",
    duration: "45 min 02 seg",
    thumb: "./thumb_web/photo-6.avif",
    video_url: "p-YtB2HzwEA"
  },
  {
    title: "Testes - Ferramentas práticas de testagem",
    duration: "55 min 46 seg",
    thumb: "./thumb_web/photo-7.avif",
    video_url: "IW84MB-9toU"
  },
  {
    title: "Se tivesse começado mais cedo, talvez não estivesse aqui hoje",
    duration: "50 min 00 seg",
    thumb: "./thumb_web/photo-8.avif",
    video_url: "NKsfW6vfeE4"
  },
  {
    title: "Trabalhando no front-end do Zé Delivery",
    duration: "39 min 18 seg",
    thumb: "./thumb_web/photo-9.avif",
    video_url: "aUI1C8D9WnA"
  },
  {
    title: "7 Hábitos dos Devs que chegam no próximo nível",
    duration: "18 min 34 seg",
    thumb: "./thumb_web/photo-10.avif",
    video_url: "4JbdtlqkbaY"
  },
  {
    title: "Dicas para praticar e evoluir na programação web",
    duration: "23 min 53 seg",
    thumb: "./thumb_web/photo-11.avif",
    video_url: "V-6ff7Mzg98"
  },
  {
    title: "Nunca saí sem respostas da comunidade",
    duration: "36 min 22 seg",
    thumb: "./thumb_web/photo-12.avif",
    video_url: "M5f16tqYCqc"
  },
  {
    title: "Freelance: modelos de trabalho na carreira dev (feat. Bossabox)",
    duration: "58 min 46 seg",
    thumb: "./thumb_web/photo-13.avif",
    video_url: "Gw2XuEICJS8"
  },
  {
    title: "Vantagens e desvantagens do pair programming (feat. Take Blip)",
    duration: "51 min 44 seg",
    thumb: "./thumb_web/photo-14.avif",
    video_url: "MUAAqgObHuI"
  },
  {
    title: "Da escola de inglês para a programação",
    duration: "46 min 13 seg",
    thumb: "./thumb_web/photo-15.avif",
    video_url: "WoVXCbHL0Z4"
  },
  {
    title: "Não sei inglês, e agora? ",
    duration: "44 min 19 seg",
    thumb: "./thumb_web/photo-48.avif",
    video_url: "keMIEpZxQNI"
  },
  {
    title: "Júnior, pleno e sênior, encerrando o assunto!",
    duration: "39 min 21 seg",
    thumb: "./thumb_web/photo-49.avif",
    video_url: "b1uDnGcqeeQ"
  },
  {
    title: "Front-End: Desafios reais do mercado de trabalho",
    duration: "2 hr 08 min 16 seg",
    thumb: "./thumb_web/photo-50.avif",
    video_url: "eb_ZJorrWeI"
  },
]

const frontends = [
  {
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "./thumb_web/photo-51.avif",
    video_id: "GykTLqODQuU",
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "./thumb_web/photo-52.avif",
    video_id: "HN1UjzRSdBk",
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "./thumb_web/photo-53.avif",
    video_id: "rAzHvYnQ8DY",
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "./thumb_web/photo-54.avif", /** https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg */
    video_id: "GSqR2i-Pq6o",
  },
  {
    title: "Acessibilidade no ecossistema de programação",
    duration: "1 hr 07 min 14 seg",
    thumb: "./thumb_web/photo-16.avif",
    video_url: "B_jepC7Eufo"
  },
  {
    title: "TUDO que você deve estudar de JavaScript antes do React",
    duration: "1 hr 25 min 23 seg",
    thumb: "./thumb_web/photo-55.avif",
    video_url: "37SwqREHRGI"
  },
  {
    title: "Filtrando elementos na DOM com JavaScript PURO",
    duration: "24 min 55 seg",
    thumb: "./thumb_web/photo-31.avif",
    video_url: "p-hgFD2HJSc"
  },
  {
    title: "Enviando formulários sem programar back-end",
    duration: "23 min 52 seg",
    thumb: "./thumb_web/photo-32.avif",
    video_url: "NVc_xY_dP-M"
  },
  {
    title: "Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components",
    duration: "44 min 26 seg",
    thumb: "./thumb_web/photo-33.avif",
    video_url: "1nVUfZg2dSA"
  },
  {
    title: "Recriando home do Pinterest com HTML, Sass e JavaScript",
    duration: "53 min 16 seg",
    thumb: "./thumb_web/photo-34.avif",
    video_url: "XdqD8qi44Cg"
  },
  {
    title: "Guia definitivo de performance (useMemo, useCallback, memo) ",
    duration: "54 min 14 seg",
    thumb: "./thumb_web/photo-35.avif",
    video_url: "NmU2nNehNNY"
  },
  {
    title: "Como COMEÇAR a programar em 2023",
    duration: "34 min 59 seg",
    thumb: "./thumb_web/photo-36.avif",
    video_url: "chkRo381f44"
  },
  {
    title: "Guia de estudo JavaScript em 2023!",
    duration: "1 hr 04 min 28 seg",
    thumb: "./thumb_web/photo-37.avif",
    video_url: "EDotqZwJ4aA"
  },
  {
    title: "Design para front-end",
    duration: "27 min 45 seg",
    thumb: "./thumb_web/photo-38.avif",
    video_url: "xZGxzSJuwbo"
  },
  {
    title: "Dicas para dev júnior / Flexbox ou Grid? / Container Queries",
    duration: "41 min 03 seg",
    thumb: "./thumb_web/photo-39.avif",
    video_url: "LAz15zfp1pQ"
  },
  {
    title: "Como melhorar minha lógica de programação?",
    duration: "43 min 52 seg",
    thumb: "./thumb_web/photo-40.avif",
    video_url: "LA2L4OsYrY0"
  },
  {
    title: "Como estudar documentação: WEB Components e Shadow DOM",
    duration: "37 min 37 seg",
    thumb: "./thumb_web/photo-41.avif",
    video_url: "Sm_r3qamCzU"
  },
  {
    title: "Boas práticas para escrever um HTML profissional ",
    duration: "32 min 33 seg",
    thumb: "./thumb_web/photo-42.avif",
    video_url: "TBplwrsUj4s"
  },
  {
    title: "JavaScript - Maneiras de criar objetos",
    duration: "38 min 1 seg",
    thumb: "./thumb_web/photo-43.avif",
    video_url: "X6klpqubyBw"
  },
  {
    title: "CSS - Como eu penso em CSS?",
    duration: "20 min 35 seg",
    thumb: "./thumb_web/photo-44.avif",
    video_url: "q_ppL_sU6qU"
  },
  {
    title: "Começando no CRUD | Quando usar git revert?",
    duration: "34 min 07 seg",
    thumb: "./thumb_web/photo-45.avif",
    video_url: "6J7JVMUrvT4"
  },
  {
    title: "3 coisas que você precisa dominar no Javascript pra se dar bem no React",
    duration: "11 min 41 seg",
    thumb: "./thumb_web/photo-46.avif",
    video_url: "a2ni_JNvJYQ"
  },
  {
    title: "O ERRO mais comum no React (você já fez isso)",
    duration: "13 min 25 seg",
    thumb: "./thumb_web/photo-47.avif",
    video_url: "kCpca2z2cls"
  },
  {
    title: "#boraCodar um player de música",
    duration: "1 hr 05 min 9 seg",
    thumb: "./thumb_web/photo-48.avif",
    video_url: "M_eaBcany6Y"
  },
];

const projects = [
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "./thumb_web/photo-56.avif",
    video_id: "2alg7MQ6_sI",
  },
  {
    title:
      "Princípios SOLID em uma API REST com Node.js e TypeScript",
    duration: "48 min 28 seg",
    thumb: "./thumb_web/photo-17.avif",
    video_id: "vAV4Vy4jfkc",
  },
  {
    title:
      "TDD na prática",
    duration: "1 hr 59 min 47 seg",
    thumb: "./thumb_web/photo-18.avif",
    video_id: "sg1zFpNM5Jw",
  },
  {
    title:
      "REFATOREI UM CÓDIGO REACT USANDO CLEAN CODE",
    duration: "30 min 52 seg",
    thumb: "./thumb_web/photo-48.avif",
    video_id: "qcIhUoBZaHg",
  },
]

const backends = [
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "./thumb_web/photo-57.avif",
    video_id: "ghTrp1x_1As",
  },
  {
    title: "Seu próximo back-end Node com TESTES! (+ SOLID)",
    duration: "1hr 2 min 42 seg",
    thumb: "./thumb_web/photo-19.avif",
    video_id: "jBOLRzjEERk",
  },
  {
    title: "COMEÇANDO COM NODE.JS",
    duration: "1hr 19 min 8 seg",
    thumb: "./thumb_web/photo-20.avif",
    video_id: "fm4_EuCsQwg",
  },
  {
    title: "Consumindo API no front-end com AXIOS",
    duration: "50 min 20 seg",
    thumb: "./thumb_web/photo-21.avif",
    video_id: "VM4e37DaskU",
  },
  {
    title: "GraphQL no Node.js",
    duration: "44 min 33 seg",
    thumb: "./thumb_web/photo-22.avif",
    video_id: "1dz48pReq_c",
  },
  {
    title: "O guia completo para acessar sua primeira vaga como dev back-end",
    duration: "1hr 21 min 33 seg",
    thumb: "./thumb_web/photo-23.avif",
    video_id: "fuBjSDSZY-8",
  },
  {
    title: "Next.js substitui o back end?",
    duration: "24 min 52 seg",
    thumb: "./thumb_web/photo-24.avif",
    video_id: "7d_yAEMF7Z8",
  },
  {
    title: "Upload de arquivos: back-end com NodeJS",
    duration: "1 hr 3 min 21 seg",
    thumb: "./thumb_web/photo-25.avif",
    video_id: "MkkbUfcZUZM",
  },
  {
    title: "[API NodeJS + Express + Mongo] Estrutura e cadastro",
    duration: "22 min 33seg",
    thumb: "./thumb_web/photo-26.avif",
    video_id: "BN_8bCfVp88",
  },
  {
    title: "TypeScript com NodeJS do jeito certo!",
    duration: "43 min 34 seg",
    thumb: "./thumb_web/photo-27.avif",
    video_id: "aTf8QTjw4RE",
  },
  {
    title: "Programa em Node.js com NestJS ",
    duration: "1 hr 26 min 5 seg",
    thumb: "./thumb_web/photo-28.avif",
    video_id: "TRa55WbWnvQ",
  },
  {
    title: "SQL no Node.js com Sequelize",
    duration: "1 hr 40 min 21 seg",
    thumb: "./thumb_web/photo-29.avif",
    video_id: "Fbu7z5dXcRs",
  },
  {
    title: "Node.js: Iniciando da teoria à prática",
    duration: "1 hr 33 min 17seg",
    thumb: "./thumb_web/photo-30.avif",
    video_id: "DiXbJL3iWVs",
  },
]

softskills.map((softskill) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", softskill.video_url);
  cardClone.querySelector("img").src = softskill.thumb;
  cardClone.querySelector(".title").innerHTML = softskill.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = softskill.duration;
  cardClone.querySelector(".info > p.price").innerHTML = "Soft Skills";
  sectionCards.appendChild(cardClone);
});

frontends.map((frontend) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", frontend.video_id);
  cardClone.querySelector("img").src = frontend.thumb;
  cardClone.querySelector(".title").innerHTML = frontend.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = frontend.duration;
  cardClone.querySelector(".info > p.price").innerHTML = "Frontend";
  sectionCards.appendChild(cardClone);
});

projects.map((project) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", project.video_id);
  cardClone.querySelector("img").src = project.thumb;
  cardClone.querySelector(".title").innerHTML = project.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = project.duration;
  cardClone.querySelector(".info > p.price").innerHTML = "Tools";
  sectionCards.appendChild(cardClone);
});

backends.map((backend) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", backend.video_id);
  cardClone.querySelector("img").src = backend.thumb;
  cardClone.querySelector(".title").innerHTML = backend.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = backend.duration;
  cardClone.querySelector(".info > p.price").innerHTML = "Backend";
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

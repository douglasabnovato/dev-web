const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "As melhores SOFT SKILLS para devs (que estão começando)",
    duration: "55 min 23 seg",
    thumb: "../public/thumb_web/photo-1.avif",
    video_url: "UF7RXzD4hvs",
    category: "Soft Skills"
  },
  {
    title: "Técnicas de estudo em programação",
    duration: "28 min 28 seg",
    thumb: "../public/thumb_web/photo-2.avif",
    video_url: "Fzwr1JcqFo4",
    category: "Soft Skills"
  },
  {
    title: "O networking ajudou ele a ser reconhecido",
    duration: "38 min 48 seg",
    thumb: "../public/thumb_web/photo-3.avif",
    video_url: "5CCUnGl2CsY",
    category: "Soft Skills"
  },
  {
    title: "Fiz o desafio NLW e ganhei uma bolsa de estudos",
    duration: "35 min 22 seg",
    thumb: "../public/thumb_web/photo-4.avif",
    video_url: "hQuz11fzmS0",
    category: "Soft Skills"
  },
  {
    title: "Mercado dev - Rotinas e prioridades de estudo",
    duration: "22 min 30 seg",
    thumb: "../public/thumb_web/photo-5.avif",
    video_url: "zukkLobYGWg",
    category: "Soft Skills"
  },
  {
    title: "Dev júnior - Expectativa vs realidade",
    duration: "45 min 02 seg",
    thumb: "../public/thumb_web/photo-6.avif",
    video_url: "p-YtB2HzwEA",
    category: "Soft Skills"
  },
  {
    title: "Testes - Ferramentas práticas de testagem",
    duration: "55 min 46 seg",
    thumb: "../public/thumb_web/photo-7.avif",
    video_url: "IW84MB-9toU",
    category: "Soft Skills"
  },
  {
    title: "Se tivesse começado mais cedo, talvez não estivesse aqui hoje",
    duration: "50 min 00 seg",
    thumb: "../public/thumb_web/photo-8.avif",
    video_url: "NKsfW6vfeE4",
    category: "Soft Skills"
  },
  {
    title: "Trabalhando no front-end do Zé Delivery",
    duration: "39 min 18 seg",
    thumb: "../public/thumb_web/photo-9.avif",
    video_url: "aUI1C8D9WnA",
    category: "Soft Skills"
  },
  {
    title: "7 Hábitos dos Devs que chegam no próximo nível",
    duration: "18 min 34 seg",
    thumb: "../public/thumb_web/photo-10.avif",
    video_url: "4JbdtlqkbaY",
    category: "Soft Skills"
  },
  {
    title: "Dicas para praticar e evoluir na programação web",
    duration: "23 min 53 seg",
    thumb: "../public/thumb_web/photo-11.avif",
    video_url: "V-6ff7Mzg98",
    category: "Soft Skills"
  },
  {
    title: "Nunca saí sem respostas da comunidade",
    duration: "36 min 22 seg",
    thumb: "../public/thumb_web/photo-12.avif",
    video_url: "M5f16tqYCqc",
    category: "Soft Skills"
  },
  {
    title: "Freelance: modelos de trabalho na carreira dev (feat. Bossabox)",
    duration: "58 min 46 seg",
    thumb: "../public/thumb_web/photo-13.avif",
    video_url: "Gw2XuEICJS8",
    category: "Soft Skills"
  },
  {
    title: "Vantagens e desvantagens do pair programming (feat. Take Blip)",
    duration: "51 min 44 seg",
    thumb: "../public/thumb_web/photo-14.avif",
    video_url: "MUAAqgObHuI",
    category: "Soft Skills"
  },
  {
    title: "Da escola de inglês para a programação",
    duration: "46 min 13 seg",
    thumb: "../public/thumb_web/photo-15.avif",
    video_url: "WoVXCbHL0Z4",
    category: "Soft Skills"
  },
  {
    title: "Não sei inglês, e agora? ",
    duration: "44 min 19 seg",
    thumb: "../public/thumb_web/photo-48.avif",
    video_url: "keMIEpZxQNI",
    category: "Soft Skills"
  },
  {
    title: "Júnior, pleno e sênior, encerrando o assunto!",
    duration: "39 min 21 seg",
    thumb: "../public/thumb_web/photo-49.avif",
    video_url: "b1uDnGcqeeQ",
    category: "Soft Skills"
  },
  {
    title: "Front-End: Desafios reais do mercado de trabalho",
    duration: "2 hr 08 min 16 seg",
    thumb: "../public/thumb_web/photo-50.avif",
    video_url: "eb_ZJorrWeI",
    category: "Soft Skills"
  },
  {
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "../public/thumb_web/photo-51.avif",
    video_id: "GykTLqODQuU",
    category: "Frontend"
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "../public/thumb_web/photo-52.avif",
    video_id: "HN1UjzRSdBk",
    category: "Frontend"
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "../public/thumb_web/photo-53.avif",
    video_id: "rAzHvYnQ8DY",
    category: "Frontend"
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "../public/thumb_web/photo-54.avif", /** https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg */
    video_id: "GSqR2i-Pq6o",
    category: "Frontend"
  },
  {
    title: "Acessibilidade no ecossistema de programação",
    duration: "1 hr 07 min 14 seg",
    thumb: "../public/thumb_web/photo-16.avif",
    video_url: "B_jepC7Eufo",
    category: "Frontend"
  },
  {
    title: "TUDO que você deve estudar de JavaScript antes do React",
    duration: "1 hr 25 min 23 seg",
    thumb: "../public/thumb_web/photo-55.avif",
    video_url: "37SwqREHRGI",
    category: "Frontend"
  },
  {
    title: "Filtrando elementos na DOM com JavaScript PURO",
    duration: "24 min 55 seg",
    thumb: "../public/thumb_web/photo-31.avif",
    video_url: "p-hgFD2HJSc",
    category: "Frontend"
  },
  {
    title: "Enviando formulários sem programar back-end",
    duration: "23 min 52 seg",
    thumb: "../public/thumb_web/photo-32.avif",
    video_url: "NVc_xY_dP-M",
    category: "Frontend"
  },
  {
    title: "Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components",
    duration: "44 min 26 seg",
    thumb: "../public/thumb_web/photo-33.avif",
    video_url: "1nVUfZg2dSA",
    category: "Frontend"
  },
  {
    title: "Recriando home do Pinterest com HTML, Sass e JavaScript",
    duration: "53 min 16 seg",
    thumb: "../public/thumb_web/photo-34.avif",
    video_url: "XdqD8qi44Cg",
    category: "Frontend"
  },
  {
    title: "Guia definitivo de performance (useMemo, useCallback, memo) ",
    duration: "54 min 14 seg",
    thumb: "../public/thumb_web/photo-35.avif",
    video_url: "NmU2nNehNNY",
    category: "Frontend"
  },
  {
    title: "Como COMEÇAR a programar em 2023",
    duration: "34 min 59 seg",
    thumb: "../public/thumb_web/photo-36.avif",
    video_url: "chkRo381f44",
    category: "Frontend"
  },
  {
    title: "Guia de estudo JavaScript em 2023!",
    duration: "1 hr 04 min 28 seg",
    thumb: "../public/thumb_web/photo-37.avif",
    video_url: "EDotqZwJ4aA",
    category: "Frontend"
  },
  {
    title: "Design para front-end",
    duration: "27 min 45 seg",
    thumb: "../public/thumb_web/photo-38.avif",
    video_url: "xZGxzSJuwbo",
    category: "Frontend"
  },
  {
    title: "Dicas para dev júnior / Flexbox ou Grid? / Container Queries",
    duration: "41 min 03 seg",
    thumb: "../public/thumb_web/photo-39.avif",
    video_url: "LAz15zfp1pQ",
    category: "Frontend"
  },
  {
    title: "Como melhorar minha lógica de programação?",
    duration: "43 min 52 seg",
    thumb: "../public/thumb_web/photo-40.avif",
    video_url: "LA2L4OsYrY0",
    category: "Frontend"
  },
  {
    title: "Como estudar documentação: WEB Components e Shadow DOM",
    duration: "37 min 37 seg",
    thumb: "../public/thumb_web/photo-41.avif",
    video_url: "Sm_r3qamCzU",
    category: "Frontend"
  },
  {
    title: "Boas práticas para escrever um HTML profissional ",
    duration: "32 min 33 seg",
    thumb: "../public/thumb_web/photo-42.avif",
    video_url: "TBplwrsUj4s",
    category: "Frontend"
  },
  {
    title: "JavaScript - Maneiras de criar objetos",
    duration: "38 min 1 seg",
    thumb: "../public/thumb_web/photo-43.avif",
    video_url: "X6klpqubyBw",
    category: "Frontend"
  },
  {
    title: "CSS - Como eu penso em CSS?",
    duration: "20 min 35 seg",
    thumb: "../public/thumb_web/photo-44.avif",
    video_url: "q_ppL_sU6qU",
    category: "Frontend"
  },
  {
    title: "Começando no CRUD | Quando usar git revert?",
    duration: "34 min 07 seg",
    thumb: "../public/thumb_web/photo-45.avif",
    video_url: "6J7JVMUrvT4",
    category: "Frontend"
  },
  {
    title: "3 coisas que você precisa dominar no Javascript pra se dar bem no React",
    duration: "11 min 41 seg",
    thumb: "../public/thumb_web/photo-46.avif",
    video_url: "a2ni_JNvJYQ",
    category: "Frontend"
  },
  {
    title: "O ERRO mais comum no React (você já fez isso)",
    duration: "13 min 25 seg",
    thumb: "../public/thumb_web/photo-47.avif",
    video_url: "kCpca2z2cls",
    category: "Frontend"
  },
  {
    title: "#boraCodar um player de música",
    duration: "1 hr 05 min 9 seg",
    thumb: "../public/thumb_web/photo-48.avif",
    video_url: "M_eaBcany6Y",
    category: "Frontend"
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "../public/thumb_web/photo-56.avif",
    video_id: "2alg7MQ6_sI",
    category: "Ferramentas"
  },
  {
    title:
      "Princípios SOLID em uma API REST com Node.js e TypeScript",
    duration: "48 min 28 seg",
    thumb: "../public/thumb_web/photo-17.avif",
    video_id: "vAV4Vy4jfkc",
    category: "Ferramentas"
  },
  {
    title:
      "TDD na prática",
    duration: "1 hr 59 min 47 seg",
    thumb: "../public/thumb_web/photo-18.avif",
    video_id: "sg1zFpNM5Jw",
    category: "Ferramentas"
  },
  {
    title:
      "REFATOREI UM CÓDIGO REACT USANDO CLEAN CODE",
    duration: "30 min 52 seg",
    thumb: "../public/thumb_web/photo-48.avif",
    video_id: "qcIhUoBZaHg",
    category: "Ferramentas"
  },
  {
    title: "Seu próximo back-end Node com TESTES! (+ SOLID)",
    duration: "1hr 2 min 42 seg",
    thumb: "../public/thumb_web/photo-19.avif",
    video_id: "jBOLRzjEERk",
    category: "Ferramentas"
  },
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "../public/thumb_web/photo-57.avif",
    video_id: "ghTrp1x_1As",
    category: "Backend"
  },
  {
    title: "COMEÇANDO COM NODE.JS",
    duration: "1hr 19 min 8 seg",
    thumb: "../public/thumb_web/photo-20.avif",
    video_id: "fm4_EuCsQwg",
    category: "Backend"
  },
  {
    title: "Consumindo API no front-end com AXIOS",
    duration: "50 min 20 seg",
    thumb: "../public/thumb_web/photo-21.avif",
    video_id: "VM4e37DaskU",
    category: "Backend"
  },
  {
    title: "GraphQL no Node.js",
    duration: "44 min 33 seg",
    thumb: "../public/thumb_web/photo-22.avif",
    video_id: "1dz48pReq_c",
    category: "Backend"
  },
  {
    title: "O guia completo para acessar sua primeira vaga como dev back-end",
    duration: "1hr 21 min 33 seg",
    thumb: "../public/thumb_web/photo-23.avif",
    video_id: "fuBjSDSZY-8",
    category: "Backend"
  },
  {
    title: "Next.js substitui o back end?",
    duration: "24 min 52 seg",
    thumb: "../public/thumb_web/photo-24.avif",
    video_id: "7d_yAEMF7Z8",
    category: "Backend"
  },
  {
    title: "Upload de arquivos: back-end com NodeJS",
    duration: "1 hr 3 min 21 seg",
    thumb: "../public/thumb_web/photo-25.avif",
    video_id: "MkkbUfcZUZM",
    category: "Backend"
  },
  {
    title: "[API NodeJS + Express + Mongo] Estrutura e cadastro",
    duration: "22 min 33seg",
    thumb: "../public/thumb_web/photo-26.avif",
    video_id: "BN_8bCfVp88",
    category: "Backend"
  },
  {
    title: "TypeScript com NodeJS do jeito certo!",
    duration: "43 min 34 seg",
    thumb: "../public/thumb_web/photo-27.avif",
    video_id: "aTf8QTjw4RE",
    category: "Backend"
  },
  {
    title: "Programa em Node.js com NestJS ",
    duration: "1 hr 26 min 5 seg",
    thumb: "../public/thumb_web/photo-28.avif",
    video_id: "TRa55WbWnvQ",
    category: "Backend"
  },
  {
    title: "SQL no Node.js com Sequelize",
    duration: "1 hr 40 min 21 seg",
    thumb: "../public/thumb_web/photo-29.avif",
    video_id: "Fbu7z5dXcRs",
    category: "Backend"
  },
  {
    title: "Node.js: Iniciando da teoria à prática",
    duration: "1 hr 33 min 17seg",
    thumb: "../public/thumb_web/photo-30.avif",
    video_id: "DiXbJL3iWVs",
    category: "Backend"
  },
]

fullstacks.map((fullstack) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", fullstack.video_url);
  cardClone.querySelector("img").src = fullstack.thumb;
  cardClone.querySelector(".title").innerHTML = fullstack.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = fullstack.duration;
  cardClone.querySelector(".info > p.price").innerHTML = fullstack.category;
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
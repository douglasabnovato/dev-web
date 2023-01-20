const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  }, 
  {
    title: "aaaaaaaa",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/colleges-tech.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
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



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
    title: "hashnode",
    duration: "10 dias",
    thumb: "../files/thumb_tools/hashnode.jpg",
    site_url: "https://hashnode.com/",
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
  {
    title: "Mockingbird",
    duration: "1 dia",
    thumb: "../files/thumb_tools/mockingbird.jpg",
    site_url: "https://gomockingbird.com/home",
    category: "Mockup"
  },
  {
    title: "Balsamiq",
    duration: "1 dia",
    thumb: "../files/thumb_tools/balsamiq.jpg",
    site_url: "https://balsamiq.cloud/",
    category: "Mockup"
  },
  {
    title: "Figma",
    duration: "1 dia",
    thumb: "../files/thumb_tools/figma.jpg",
    site_url: "https://www.figma.com/",
    category: "Design Web"
  },
  {
    title: "Whimsical",
    duration: "5 dia",
    thumb: "../files/thumb_tools/whimsical.jpg",
    site_url: "https://whimsical.com/",
    category: "Projeto"
  },
  {
    title: "Diagrams",
    duration: "4 dia",
    thumb: "../files/thumb_tools/diagrams.jpg",
    site_url: "https://app.diagrams.net/",
    category: "Projeto"
  },
  {
    title: "brModeloWeb",
    duration: "4 dia",
    thumb: "../files/thumb_tools/brmodeloweb.jpg",
    site_url: "https://docs.brmodeloweb.com/",
    category: "Projeto Banco de Dados"
  },
  {
    title: "Codepen",
    duration: "1 dia",
    thumb: "../files/thumb_tools/codepen.jpg",
    site_url: "https://codepen.io/your-work",
    category: "Codar Online"
  },
  {
    title: "Codesandbox",
    duration: "1 dia",
    thumb: "../files/thumb_tools/codesandbox.jpg",
    site_url: "https://codesandbox.io/s/vanilla-vanilla",
    category: "Codar Online"
  },
  {
    title: "Stackblitz",
    duration: "1 dia",
    thumb: "../files/thumb_tools/stackblitz.jpg",
    site_url: "https://stackblitz.com/",
    category: "Codar Online"
  },
  {
    title: "Fronteditor",
    duration: "1 dia",
    thumb: "../files/thumb_tools/fronteditor.jpg",
    site_url: "https://www.fronteditor.dev/",
    category: "Codar Online"
  },
  {
    title: "Bitbucket",
    duration: "1 dia",
    thumb: "../files/thumb_tools/bitbucket.jpg",
    site_url: "https://bitbucket.org/",
    category: "Repositório de Código"
  },
  {
    title: "Gitlab",
    duration: "1 dia",
    thumb: "../files/thumb_tools/gitlab.jpg",
    site_url: "https://about.gitlab.com/",
    category: "Repositório de Código"
  },
  {
    title: "Github",
    duration: "1 dia",
    thumb: "../files/thumb_tools/github.jpg",
    site_url: "https://github.com/",
    category: "Repositório de Código"
  },
  {
    title: "Wordpress",
    duration: "1 dia",
    thumb: "../files/thumb_tools/wordpress.jpg",
    site_url: "https://wordpress.com/",
    category: "Plataforma de site"
  },
  {
    title: "Postman",
    duration: "1 dia",
    thumb: "../files/thumb_tools/postman.jpg",
    site_url: "https://www.postman.com/",
    category: "API"
  },
  {
    title: "Mailtrap",
    duration: "1 dia",
    thumb: "../files/thumb_tools/mailtrap.jpg",
    site_url: "https://mailtrap.io/",
    category: "Sistema de E-mail"
  },
  {
    title: "Fonts Google",
    duration: "1 dia",
    thumb: "../files/thumb_tools/fonts-google.jpg",
    site_url: "https://fonts.google.com/",
    category: "Fontes"
  },
  {
    title: "html color codes",
    duration: "1 dia",
    thumb: "../files/thumb_tools/htmlcolorcodes.jpg",
    site_url: "https://htmlcolorcodes.com/",
    category: "Cores"
  },
  {
    title: "uigradients",
    duration: "1 dia",
    thumb: "../files/thumb_tools/uigradients.jpg",
    site_url: "https://uigradients.com/#DarkOcean",
    category: "Cores"
  },
  {
    title: "converting colors",
    duration: "1 dia",
    thumb: "../files/thumb_tools/convertingcolors.jpg",
    site_url: "https://convertingcolors.com/hex-color-DB7093.html",
    category: "Cores"
  },
  {
    title: "illlustrations",
    duration: "1 dia",
    thumb: "../files/thumb_tools/illlustrations.jpg",
    site_url: "https://illlustrations.co/",
    category: "Illustrations"
  },
  {
    title: "unsplash",
    duration: "1 dia",
    thumb: "../files/thumb_tools/unsplash.jpg",
    site_url: "https://unsplash.com/#_=_",
    category: "Illustrations"
  },
  {
    title: "pinterest",
    duration: "1 dia",
    thumb: "../files/thumb_tools/pinterest.jpg",
    site_url: "https://br.pinterest.com/",
    category: "Illustrations"
  },
  {
    title: "imagens gratuitas",
    duration: "1 dia",
    thumb: "../files/thumb_tools/imgsgratis.jpg",
    site_url: "https://blog.rocketseat.com.br/melhores-sites-para-baixar-imagens-gratuitas-e-outros-recursos/",
    category: "Illustrations"
  },
  {
    title: "photopea",
    duration: "1 dia",
    thumb: "../files/thumb_tools/photopea.jpg",
    site_url: "https://www.photopea.com/",
    category: "Editor Images"
  },
  {
    title: "canva logo",
    duration: "1 dia",
    thumb: "../files/thumb_tools/canva.jpg",
    site_url: "https://www.canva.com/",
    category: "Illustrations"
  },
  {
    title: "nicepage",
    duration: "1 dia",
    thumb: "../files/thumb_tools/nicepage.jpg",
    site_url: "https://nicepage.com/",
    category: "Illustrations"
  },
  {
    title: "behance",
    duration: "1 dia",
    thumb: "../files/thumb_tools/behance.jpg",
    site_url: "https://www.behance.net/",
    category: "Illustrations"
  },
  {
    title: "dribbble",
    duration: "1 dia",
    thumb: "../files/thumb_tools/dribbble.jpg",
    site_url: "https://dribbble.com/",
    category: "Illustrations"
  },
  {
    title: "tailor brands",
    duration: "1 dia",
    thumb: "../files/thumb_tools/tailorbrands.jpg",
    site_url: "https://studio.tailorbrands.com/",
    category: "Illustrations"
  },
  {
    title: "phosphor icons",
    duration: "1 dia",
    thumb: "../files/thumb_tools/phosphoricons.jpg",
    site_url: "https://phosphoricons.com/",
    category: "Illustrations"
  },
  {
    title: "flaticon",
    duration: "1 dia",
    thumb: "../files/thumb_tools/flaticon.jpg",
    site_url: "https://www.flaticon.com/",
    category: "Icon"
  },
  {
    title: "icons8",
    duration: "1 dia",
    thumb: "../files/thumb_tools/icons8.jpg",
    site_url: "https://icons8.com/",
    category: "Icon"
  },
  {
    title: "freepik",
    duration: "1 dia",
    thumb: "../files/thumb_tools/freepik.jpg",
    site_url: "https://br.freepik.com/",
    category: "Icon"
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



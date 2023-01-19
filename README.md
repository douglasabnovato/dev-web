<h4 align="center"> 
	🚧 Developer 🚀
</h4>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="versão 1.5 do projeto" title="#developer" src="./.github/tela-5.jpg">
</p> 

Links de conteúdos para aprender a programar, sendo: soft skill, frontend, backend e tools.

### Tarefas

- [x] links organizados em categorias
- [x] tooltip para indicar a categoria do card
- [x] objeto para cada categoria
- [x] compreendido a url do youtube
- [x] personalizar logo
- [x] favicon personalizado
- [x] personalizar menu com área de estudo
- [x] personalizar menu mobile com fluxo 
- [x] estrutura de tópicos construídos index, hardskills, tools, host, collegestech, perfisdev, goodcompanies, jobs, softskills, speaker
- [ ] personalizar formulário com uma funcionalidade legal
- [ ] criar função para botão principal

### Detalhes da versão inicial

A Responsividade é um assunto muito importante para que nosso layout seja flexível, conforme o dispositivo que o está acessando, seja ele smartphone, tablet ou desktop. (E até mesmo, a impressora sabia?)

Uma Masterclass da Rocketseat tratou desse assunto com estratégias de CSS Units para que tanto o nosso Layout, quanto os nossos textos, fiquem fluidos. 

Utilizaram também CSS Media Queries para adicionar CSS customizados conforme o **breakpoint** definido, para que nosso layout fique adaptado ao viewport do dispositivo. 

Além do mais, veremos atributos e tags HTML especiais, para que possamos obter sucesso ao tornar nosso layout responsivo.

### Versão Final

Design inicial com a aplicação das técnicas citadas abaixo de responsividade.

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="versão 1.5 do projeto" title="#BlogResponsive" src="./.github/tela-5.jpg" width="400px">
  <img alt="versão 1.5 do projeto" title="#BlogResponsive" src="./.github/tela-6.jpg" height="400px">
</p> 

## CSS Units

Unidades de medidas do CSS

Layout Fixo
`px` - Pixels

Layout Fluido
`%` - Porcentagem
`auto` - Automática
`vh` - Viewport Height
`vw` - Viewport Width

Textos fixos
`1px` = 0.75pt
`16px` = 12pt

Texto fluidos
`em` - multiplicado pelo pai 
`rem` - multiplicado pelo root

## CSS Media Queries 

No HTMl eu coloco a seguinte tag meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

No CSS eu uso da seguinte forma

```css
@media (max-width: 320px) {
  #form h3 {
    font-size: 2rem;
  }
}
```

## HTML Media Attrib.

Posso utilizar o atribuito `media` no link do meu HTML, ao importar um arquivo css, usando as propriedades da mesma forma que usaria na regra `@media` do css.

```html
<link 
    rel="stylesheet"
    href="responsive.css" 
    media="screen and (max-width: 768px)"
/>

<link rel="stylesheet" href="print.css" media="print">
```

## Imagens

Usamos a tag `<picture>` para que as imagens sejam responsivas.

```html
<picture class="image" alt="Imagem">
    <source media="(min-width: 768px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
    <source media="(min-width: 320px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg">
    <source media="(min-width: 10px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/mqdefault.jpg">

    <img 
        src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" 
        alt="Imagem" />
</picture>
```

### Versão Inicial

Design inicial sem aplicação das técnicas citadas acima de responsividade.

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="versão 1 do projeto" title="#BlogResponsive" src="./.github/tela-3.jpg" width="400px">
  <img alt="versão 1 do projeto" title="#BlogResponsive" src="./.github/tela-4.jpg" height="400px">
</p> 

Sempre que possível, usar SVG ao invés de JPG, PNG 

Feito com ❤️ por Douglas A B Novato 👋🏽 [Entre em contato!](https://www.linkedin.com/in/douglasabnovato/)
 
Fonte do projeto na [Responsividade na Prática | Masterclass #08](https://www.youtube.com/watch?v=H91DhKPjhPk) e do repositório no [Github](https://github.com/rocketseat-content/youtube-masterclass-responsividade).

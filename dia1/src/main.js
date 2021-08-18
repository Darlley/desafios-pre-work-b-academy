import './style.css'

/* Resolvido da forma que estava selecionando o atributo data

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>


ja adianto que o AdjacentHTML eu ja tinha conhecido esta semana n curso de JavaScript para React do Marco Bruno que estou acompanhando : */


const $mensagem = `<h1>B. Academy</h1>
<p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
document.querySelector('[data-js="app"]').insertAdjacentHTML("beforeend", $mensagem);

const formularioCadastro = document.querySelector('[data-js="formulario"]')
formularioCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  const formvalues = [...event.target]
  const imagem = formvalues[1].value
  const modelo = formvalues[2].value
  const ano = formvalues[3].value
  const placa = formvalues[4].value
  const cor = formvalues[5].value

  console.log('imagem - ', imagem)
  console.log('modelo - ', modelo)
  console.log('ano - ', ano)
  console.log('placa - ', placa)
  console.log('cor - ', cor)

  const carrosTabela = document.querySelector('[data-js="info-car"]')
  const tr = document.createElement('tr')

  console.log(formvalues)
  for (let values=1; values <= 5; values++){

    const td = document.createElement('td')
    td.textContent = formvalues[values].value
    tr.appendChild(td)

  }
  carrosTabela.appendChild(tr)

})







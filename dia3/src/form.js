export const btn = document.querySelector('[data-js="btn"]')
btn.addEventListener('click', (event) => {
  event.preventDefault()

  console.log(event.target)
})

export const valor = document.querySelector('[data-js="form-nome"]')
valor.addEventListener('input', (event) => {
  const value = [...event.target.value]
  let letter = ""

  for(let i=0; i<value.length; i++){
    if(i==0){
      letter = value[0].toUpperCase()
    }else{

      if(value[i-1] == " "){
        letter += value[i].toUpperCase()

      } else {
        letter += value[i]
      }

    }

  }

  if(letter.includes(' De ')){
    letter = letter.replace(' De ', ' de ')
  }
  if(letter.includes(' Da' )){
    letter = letter.replace(' Da ', ' da ')
  }
  if(letter.includes(' Do ')){
    letter = letter.replace(' Do ', ' do ')
  }
  if(letter.includes(' Dos ')){
    letter = letter.replace(' Dos ', ' dos ')
  }

  event.target.value = letter

})

// SEGUNDO EXERCÍCIO

const colors = document.querySelector('[data-js="select-colors"]')
const select = document.querySelector('[data-js="lang-select"]')

select.addEventListener('change', (event) => {
  console.dir(event.target.selectedIndex)

  const elementos = [...event.target.selectedOptions].map(el => el.value)

  const div = document.createElement('div')
  div.classList.add('div-select')
  div.setAttribute('data-js', 'div-select')


  for(let value in elementos){
    div.classList.toggle(`div-select-${elementos[value]}`)
    console.log(typeof elementos[value], value, elementos)
  }
  colors.appendChild(div)

  //const countdivs = document.querySelectorAll('[data-js="div-select"]')
  //console.log('DIV-SELECT', countdivs)

  /* PRIMEIRA SOLUÇÃO
  if(elementos.length > 0){

    const div = document.createElement('div')
    div.classList.toggle('div-select')

    for(let i=0; i<elementos.length; i++){

      if(elementos[i] == 'azul'){

      }else if(elementos[i] == 'vermelho'){
        div.classList.toggle('div-select-red')
      }if(elementos[i] == 'amarelo'){
        div.classList.toggle('div-select-yellow')
      }if(elementos[i] == 'preto'){
        div.classList.toggle('div-select-black')
      }if(elementos[i] == 'branco'){
        div.classList.toggle('div-select-white')
      }
    }
  }*/

})

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

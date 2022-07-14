//? Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function textSplitter(str, len) {
  let textTill = str.slice(0, len + 1)
  return textTill
}

let ex = 'Hello, world'
console.log(textSplitter(ex, 4))
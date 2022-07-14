//? Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function strsArr(str) {
  let re = /\s/
  return str.split(re)
}

let myString = "Hola como estas"

console.log(strsArr(myString))
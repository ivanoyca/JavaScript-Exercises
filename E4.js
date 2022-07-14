//? Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function textRepeat(text, times) {
  let myStr = `${text} `
  let repeat = myStr.repeat(times)
  return repeat
}

let str = "hello world today"

console.log(textRepeat(str, 2))
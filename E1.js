//? Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") 
function stringLength(str) {
	let len = 0
	if (typeof str == 'number') {
		let numStr = str.toString()
		for (let i = 1; i <= numStr.length; i++) {
			len += 1
		}
	} else if (typeof str == 'object') {
		let objStr = JSON.stringify(str)
		for (let i = 1; i <= objStr.length; i++) {
			len += 1
		}
	} else {
		for (let i = 1; i <= str.length; i++) {
			len += 1
		}
	}
	return len
}

let rand = "hola";
let rand2 = 1;
let rand3 = [1, 2, 3];

console.log(stringLength(rand))
console.log(stringLength(rand2))
console.log(stringLength(rand3))
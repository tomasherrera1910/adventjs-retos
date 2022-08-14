// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
//   Por suerte sólo los ha dejado en medio de los paréntesis...

function isValid(letter) {
    let carta = true
    let parentesisVacios = letter.substring(letter.indexOf('(')+1, letter.indexOf(')'))
    if(!letter.includes('(') || !letter.includes(')'))
      carta = false
    if(letter.includes('[') || letter.includes('{'))
      carta = false
    if(letter.indexOf(')') < letter.indexOf('(')) {
           carta = false
     }else if(parentesisVacios.trim().length === 0 || parentesisVacios.includes('(') || parentesisVacios.includes(')')){
           carta = false
     } 
    return carta
   }
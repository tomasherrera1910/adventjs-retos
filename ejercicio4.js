// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

// Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios.
//  Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

const altura = 3
function arbolNavidad(altura){
  if(altura >= 1 && altura <= 100){
    let arbol = ''
    const ancho = 2 * altura - 1
    const mitad = Math.floor(ancho/2)
    console.log(mitad)
    for (let i = 0; i < altura; i++) {
      for (let j = 0; j < ancho; j++) {
        if(i == 0){
          if(j == mitad) arbol += '*'
          else arbol += '_'
        }
        if(i >= 1){
          if(j == mitad || j >= mitad-i && j <= mitad+i) arbol += '*'
          else arbol += '_'
        }
        }
      arbol += '\n'
  }
    for (let i = 0; i < 2; i++) {
      arbol += '_'.repeat(mitad) 
      arbol += '#'
      arbol += '_'.repeat(mitad) 
      arbol += '\n'
    }
    return arbol
  }
  else {
    return 'el arbol debe tener una altura entre 1 y 100'
  }
}

console.log(arbolNavidad(5))

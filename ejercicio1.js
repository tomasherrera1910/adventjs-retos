// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
// y que además su nombre contenga tanto las letras n Y a, sin importar el orden, 
// las mayúsculas o espacios.

function contarOvejas(ovejas) {
    const ovejasFiltradas = ovejas.filter(oveja => oveja.color === 'rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a'))
    return ovejasFiltradas
  }
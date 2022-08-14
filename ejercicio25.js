// Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾
//  encima todavía no han retirado los platos y la comida de ayer...

// Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, 
// está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

// Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo.
//  Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para 
//  saber si su próximo movimiento es correcto o no ✅.

// El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es 
// una matriz (un array de arrays) donde cada posición puede ser:

// Un espacio vacío es que no hay nada
// Una m es el ratón
// Un * es la comida

function canMouseEat(direction, game) {
    let canEat = null
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[i].length; j++) {
        if(game[i][j] === 'm'){
              direction === 'up' && i > 1 && game[i-1][j] == '*' ? canEat = true
            : direction === 'down' && i < game.length-1 && game[i+1][j] == '*' ? canEat = true
            : direction === 'right' && j < game[0].length-1 && game[i][j+1] == '*' ? canEat = true
            : direction === 'left' && j > 1 && game[i][j-1] == '*' ? canEat = true
            : canEat = false
        }
        }
    }
    if(canEat) console.log(direction)
    return canEat
  }
  const room = [
    [' ', ' ', ' '],
    [' ', '*', 'm'],
    [' ', ' ', '*']
  ]
  
  // canMouseEat('up',    room)   // false
  // canMouseEat('down',  room)   // true
  // canMouseEat('right', room)   // false
  // canMouseEat('left',  room)   // false
  
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
  
  // canMouseEat('up',    room2)   // false
  // canMouseEat('down',  room2)   // false
  // canMouseEat('right', room2)   // true
  // canMouseEat('left',  room2)   // false

  const room3 = [
    [' ', ' ', ' ', ' '],
    [' ', ' ', 'm', ' '],
    [' ', ' ', '*', ' ']
  ]
    
  // canMouseEat('up',    room3)   // false
  // canMouseEat('down',  room3)   // true
  // canMouseEat('right', room3)   // false
  // canMouseEat('left',  room3)   // false


  
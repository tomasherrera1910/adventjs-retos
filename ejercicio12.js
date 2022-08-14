// En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico 
// para poder hacer la ruta perfecta para dejar los regalos.

// La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

// El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. 
// El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 
// 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

// Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

// Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

function getMinJump(obstacles) {
    obstacles.sort((a, b)=>{return a-b})
    let salto = null
    let saltoAux = 0
    for (let i = 1; i <= obstacles[obstacles.length-1]; i++) {
        saltoAux = 0
        
        for (let j = 0; j < obstacles.length; j++) {
            if(!obstacles.includes(saltoAux)){
                saltoAux += i
                if(saltoAux > obstacles.length)
                salto = i
            }else{
                salto = 0
            }
        }
        if (salto > 0) break
    }
    return salto 
  }
  const obstacles = [2, 4, 6, 8, 10]
  const obstacles2 = [5, 3, 6, 7, 9]
  console.log(getMinJump([14, 10, 8, 2, 3, 6]))
  
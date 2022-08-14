// ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

// Lo peor es que son tantos que no sabemos cuál es el que nos falta... 
// ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

// 👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

// 👎 Lo malo: la lista está desordenada y podría faltar el último...

// Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

function missingReindeer(ids) {
    ids.sort((a,b) => a - b)
    let renoFaltante = null;
    for(let i = 0; i <=ids.length; i++){
        if(!ids.includes(i)) renoFaltante = i
    }
    console.log(renoFaltante)
    return renoFaltante
  }

  const ids = [5, 6, 1, 2, 3, 7, 0]
  missingReindeer(ids)
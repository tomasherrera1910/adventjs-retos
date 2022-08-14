// Este mes de diciembre hay películas super interesantes en el cine... 
// y tengo que optimizar cómo gasto el dinero.

// Mi cine favorito tiene dos posibilidades:

// • Entrada de un sólo uso: Cuesta 12$ por cada película.

// • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. 
// ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.

// Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

function shouldBuyFidelity(times) {
    const normalTicket = 12 * times
    let fidelityTicket = 0
    let fidelityDiscount = 0.75
    for(let i = 1; i <= times; i++){
        fidelityTicket += 12 * fidelityDiscount
        fidelityDiscount *= 0.75
    }
    const fidelity = 250 + fidelityTicket
    console.log(fidelity)
    if(normalTicket <= fidelity) return false
    else return true
  }
 
 
shouldBuyFidelity(3)
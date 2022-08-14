// Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.
// Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

// El resultado tiene que ser un número entero y, como ves, 
// aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.
// ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) 
// o si es una fecha futura (devolveríamos el número de días en negativo -):

const date1 = new Date('Dec 23, 2021')
const date2 = new Date('Dec 24, 2021 00:00:01')
const date3 = new Date('Dec 24, 2021 23:59:59')
const date4 = new Date("December 20, 2021 03:24:00")

function daysToXmas(date) {
    const navidad = new Date('Dec 25, 2021')
    const diasParaNavidad = Math.ceil((navidad - date) / 1000 / 60 / 60 / 24)
    return diasParaNavidad
  }

console.log(daysToXmas(date3)) 


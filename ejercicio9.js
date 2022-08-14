// En la fábrica de Papa Noél 🎅 se acerca el día especial... 
// y todavía tenemos un montón de cosas por contar. 😅

// Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, 
// que puede ser de valores u objetos, a través de una función o de una propiedad.

function groupBy(collection, it) {
    const obj = {}
    const isFunction = typeof it === 'function'
    collection.forEach(item => {
        const result = isFunction ? it(item)
                                  : item[it]
        obj[result] ? obj[result].push(item)
                    : obj[result] = [item]
    })
    return obj
  }
    
        console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
        console.log(groupBy(['one', 'two', 'three'], 'length'))
        console.log(groupBy([{age: 23}, {age: 24}], 'age'))
        console.log(groupBy(
        [1397639141184, 1363223700000],
        timestamp => new Date(timestamp).getFullYear()
        ))
        console.log(groupBy([
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
        ], 'rating'))

        
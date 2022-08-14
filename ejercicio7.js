// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.
// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta',
        'cajonEnCajon': {
          'producto' : 'pelota'
        }
      }
    }
  }
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
  
  
  function contains(store, product) {
    let exist = null
    Object.keys(store).forEach((key) => {
        if(store[key] === product) exist = true
        console.log(`exist fuera del if ${exist}`)
        
        if(typeof store[key] === 'object'){
          if (contains(store[key], product)) exist = true
        }
    })
   
    return exist ?? false
  }
  console.log(contains(almacen, 'pelota'))
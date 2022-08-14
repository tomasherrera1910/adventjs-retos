// Para mejorar la productividad de la tienda en la que trabajamos, 
// vamos a crear una pequeña máquina que calcula el mínimo número de 
// monedas que debemos usar para dar el cambio de una compra en metálico.

// Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y
//  la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
function getCoins(change) {
    const coins = [1,2,5,10,20,50]
    const coinsAmount = [0,0,0,0,0,0]
    
    while(change !== 0) {
        if(coins[5] <= change){ 
        coinsAmount[5] += 1
        change -=50
        }
        else if(coins[4] <= change){ 
        coinsAmount[4] += 1
        change -=20
        }
        else if(coins[3] <= change){ 
        coinsAmount[3] += 1
        change -=10
        }
        else if(coins[2] <= change){ 
        coinsAmount[2] += 1
        change -= 5
        }
        else if(coins[1] <= change){ 
        coinsAmount[1] += 1
        change -= 2
        }
        else if(coins[0] <= change){ 
        coinsAmount[0] += 1
        change -= 1
        }
        
    }
    return coinsAmount
  }

  console.log(getCoins(5))
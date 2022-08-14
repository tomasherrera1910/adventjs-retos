// Invertir en criptomonedas es casi un deporte de riesgo. 
// El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

// Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y 
// debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

// La lista de precios es un array de números y representa el tiempo de izquierda a derecha. 
// Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y 
// no puedes vender a un precio que esté a la izquierda de la compra.

const pricesBtc = [39, 38, 29, 25, 24, 22, 21]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]  

function maxProfit(prices) {
    let minimo = 0
    let maximo = 0
    let profit = 0
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < prices.length; j++) {
        if(j > i){
            minimo === 0 ? minimo = prices[i] : minimo > prices[i] ? minimo = prices[i] : minimo
            maximo === 0 ? maximo = prices[j] : maximo < prices[j] ? maximo = prices[j] : maximo
        }
        }
        if(profit < maximo - minimo)    
        profit = maximo - minimo

        minimo = 0
        maximo = 0
    }
    if(profit <= 0) return -1
    else  return profit
  }

  console.log(maxProfit(pricesBtc))
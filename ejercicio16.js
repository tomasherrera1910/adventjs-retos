// Lara Eloft ha encontrado unos restos élficos en una cueva, 
// cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

// Ahora se encuentra descifrando unas misteriosas cartas que contiene información 
// sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

// Tenemos que crear una función que nos pasa una cadena de texto con símbolos y 
// tenemos que transformarlo al número correcto. 
// ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

function decodeNumber(symbols) {
    const DECODE_VALUES = {
        '.' : 1,
        ',' : 5,
        ':' : 10,
        ';' : 50,
        '!' : 100
    }
    const arraySymbols = symbols.split('')
    let total = 0;

    arraySymbols.forEach((symbol, i) => {
        if(!DECODE_VALUES[symbol]) total = NaN
        if(total !== NaN && DECODE_VALUES[symbol] >= DECODE_VALUES[arraySymbols[i+1]] || DECODE_VALUES[arraySymbols[i+1]] === undefined){
            total += DECODE_VALUES[symbol] 
        }
        else if(total !== NaN) total -= DECODE_VALUES[symbol] 
    })
    return total
   }
   decodeNumber('.........!')
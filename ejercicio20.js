// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir 
// la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga 
// si realmente la cadena de texto que les llega tiene, efectivamente, 
// todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis
//  se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

function pangram(letter) {
    let valido = true
    const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
	letter = letter.toLowerCase()
    // letter = letter.normalize("NFD").replace(([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+)
    let abecedario = ALFABETO_MINUSCULAS.split('')
	letter = letter.split('')
	abecedario.forEach(letra => {
		if (!letter.includes(letra)) valido = false
	})	
	return valido
   }
   
pangram('Exträño pän de col y kiwi se quemó bäjo fugäz väho') // true
// pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true
// pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
// pangram('De la( a a la z, nos faltan letras') // false   

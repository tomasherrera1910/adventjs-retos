// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
// El tema es que es una cadena de texto y es muy difícil de leer 😱. 
// ¡Menos mal que han puesto cada regalo separado por espacio! 
// (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, 
// que significa que está tachado y no se tiene que contar.

function listGifts(letter) {
    let regalos = letter.trim()
    regalos = regalos.split(' ')
    let objeto = {}
    
    regalos.forEach((regalo) => {
        if(!regalo.startsWith('_')){
        objeto[regalo] 
        ? objeto[regalo] += 1
        : objeto[regalo] = 1
       }
    })
    return objeto
   }
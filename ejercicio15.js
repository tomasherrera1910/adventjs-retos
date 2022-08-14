// ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

// Como ya sabes, el trineo es volador y estamos ajustando el motor para 
// que haga parabolas lo más óptimas posibles. Para esto el salto debe ser 
// siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

// Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, 
// nos ha explicado que los saltos se pueden ver como arrays... 
// y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. 
// También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

function checkSledJump(heights) {
    let validJump = false
    let up = true
    let down = false
    let error = false
    heights.forEach((height, i) => {
        if(i > 0 && height > heights[i - 1] && !down) up = true
        if(i > 0 && height < heights[i - 1]){
            down = true
            up = false
        }
        if(i > 0 && height === heights[i - 1]) error = true
    })  
    if(!up && down && !error) validJump = true
    console.log(validJump)
    return validJump
  }

  checkSledJump([1,2,3,4,5,6,6,7,5])
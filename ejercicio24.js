// El abuelo 👴 dice que ve todos los árboles de navidad iguales... 
// La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

// Vamos a hacer una función que nos diga si dos árboles de navidad son iguales.
//  Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

// Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas.

function checkIsSameTree(treeA, treeB) {
    let same = false
    for (const key in treeA) {
        if(treeA[key] !== treeB[key] || typeof treeA[key] !== typeof treeB[key]) 
        same = false
        else if(typeof treeA[key] === 'object' && typeof treeB[key] === 'object'){ 
        same = (checkIsSameTree(treeA.right, treeB.right) && checkIsSameTree(treeA.left, treeB.left))
        }
        }
     return same
   }
   
   const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  }
  
    const tree2 = {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }
    
//   console.log(checkIsSameTree(tree, tree)) // true
//   console.log(checkIsSameTree(tree, tree2)) // false
//   console.log(checkIsSameTree(tree2, tree2)) // true

  const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }
//   console.log(checkIsSameTree(bigTree, bigTree)) // true
//   console.log(checkIsSameTree(tree, bigTree)) // false
const tree3 = {
    value: 1,
    left: { value: 2, left: 3, right: null },
    right: { value: 3, left: null, right: 3 }
  }
const tree4 = {
    value: 1,
    left: { value: 2, left: null, right: 3 },
    right: { value: 3, left: 3, right: null }
  }  
  console.log(checkIsSameTree(tree3, tree4)) // false

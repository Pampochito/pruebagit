// Ejercicio 1
// Array [10,20,55,321321,312,4043,4341,0,312321,1]
let A = [10,20,55,321321,312,4043,4341,0,312321,1]
let suma=0
for (let contador = 0; contador < A.length; contador++){
suma+= A[contador]
} 
console.log (suma);
// Ejercicio 2
// Promedio [2,5,22,43124,32321,12,321312,10,1]

// Ejercicio 3
let persona = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },    
]
let variableA = persona.filter(function(elemento){
    return elemento.age >= 18;

});
console.log("Los mayores a 18 son: ", variableA.length)

let variableB= persona.filter(function(elemento){
    return elemento.age <= 18; 
});
console.log ("Los menores de 18 son: ", variableB.length)
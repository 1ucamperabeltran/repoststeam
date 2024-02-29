const hoa= [1,"", 2.5,5]
const hoa2= [7,9,3,6]

//añade al final del arreglo
hoa.push("hola")
//extrae el elemento final del array
hoa.pop()
//añade el elemento en el inicio del array
hoa.unshift("hola")
//extrae el elemnto del inicio del array
const shift= hoa.shift()
//extrae uno o varios elementos de un  array
//el primer parametro es la posicion y el 2do es la cantidad
const splice= hoa.splice(2,2)

console.log(hoa)
//une los array
console.log (hoa.concat(hoa2))
//si hay un elemento en el array seria true si no lo contrario
console.log(hoa.includes(1))
//
console.log(hoa)
// es como si preguntara en que posicion esta el elemento
console.log(hoa.indexOf(1))






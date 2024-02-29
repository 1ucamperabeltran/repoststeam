const nombres2 = [
    2,
    10,
    1
];
const objetos = [
    { nombre: "geral", edad: 19 },
    { nombre: "alberto", edad: 21 },
    { nombre: "rafael", edad: 30 },
    { nombre: "elias", edad: 35 }
];

function Saludo() {
    return "Hola"
}

const Adios = () => "Adios"

console.log(nombres2.reduce((nombre2, acumulador) => {
    nombre2 = acumulador
    console.log(nombre2)
    if(nombre2 >= acumulador){
    }else{
        nombre2 = nombre2
    }
    return nombre2
}))


console.log(Saludo())
console.log(Adios())
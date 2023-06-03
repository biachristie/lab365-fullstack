const bicicletas = [
    {
        id: 1,
        name: 'Nimbus Stark',
        price: 4999
    },
    {
        id: 2,
        name: 'Magic Might',
        price: 2499
    },
    {
        id: 3,
        name: 'Nebula Cosmic',
        price: 3999
    }
]

function buscarBicicleta(id) {
    bicicletas.forEach(bicicleta => {
        if (id === bicicleta.id) {
            console.log(`Ir para página da bicicleta ${bicicleta.name}`);
        }
    });
}
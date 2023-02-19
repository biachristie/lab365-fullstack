const d1 = '2023-03-19';
const d2 = '2023-02-19';

setInterval(() => {
    const differenceInMs = new Date(d1) - new Date(d2);
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
    
    if (d1 === d2) {
        console.log("Feliz Aniversário!!!");
    } else {
        console.log(`Faltam ${differenceInDays} dias para o aniversário.`);
    }
}, 5000);
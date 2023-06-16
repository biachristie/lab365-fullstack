const users = [
    {nome: "luis", idade: 26},
    {nome: "norma", idade: 16},
    {nome: "daiana", idade: 26},
    {nome: "jorge", idade: 16},
    {nome: "kauan", idade: 16},
    {nome: "charles", idade: 26},
    {nome: "marco", idade: 16},
    {nome: "bruno", idade: 16}
];

const minor18yo = [];
const over18yo = [];

users.forEach(element => {
    if (element.idade >= 18) {
        over18yo.push(element);
    } else {
        minor18yo.push(element);
    }
});

console.log(minor18yo);
console.log(over18yo);
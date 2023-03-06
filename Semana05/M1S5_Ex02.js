const users = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
const fruits = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra', 'Laranja'];
const newList = [];

fruits.reverse();

for (let i = 0; i < users.length; i++) {
    const group = `${users[i]} - ${fruits[i]}`;
    newList.push(group);
}

console.log(newList);
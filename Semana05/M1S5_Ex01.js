const list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];
const duplicatedNames = [];
const newList = [];

list.forEach(name => {
    if (newList.includes(name)) {
        duplicatedNames.push(name);
        return
    }
    
    newList.push(name);
});

console.log(`${duplicatedNames},`, newList)
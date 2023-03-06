let list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

function addUsers(user) {
    if (user === "") throw new Error("'user' is empty. Enter a valid value.")
    if (typeof user !== "string") throw new Error("'user' must be a string value.");
    if (list.includes(user)) throw new Error(`${user} already exists.`);
    
    list.push(user)
    console.log(list);
}

// addUsers("")
// addUsers(3)
// addUsers("Pedro")
// addUsers("Ana")
// addUsers("Julia")
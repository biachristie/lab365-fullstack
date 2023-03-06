function countVogals(word) {
    if (word === "") throw new Error("'word' is empty. Enter a valid value.");
    if (typeof word !== "string") throw new Error("'word' must be a string value.");

    const vogals = ["a", "e", "i", "o", "u"];
    let numberVogals = 0;
    
    const array = word.toLocaleLowerCase().split("");
    array.forEach(character => {
        if (vogals.includes(character)) numberVogals++;
    });
    
    if (numberVogals === 0) throw new Error(`${word} has no vogals.`)
    
    console.log(`Vogals in ${word}: ${numberVogals}`);
}

// countVogals("")
// countVogals(5)
// countVogals("paralelepipedo")
// countVogals("BANANA")
// countVogals("jfshfsfhgsghsjfh")
// countVogals("O rato roeu a roupa do rei de Roma.")

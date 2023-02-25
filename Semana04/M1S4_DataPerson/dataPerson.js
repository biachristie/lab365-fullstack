class Person {
    name = this.name;
    age = this.age;
    height = this.height;

    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    introducePerson(name, age, height) {
        console.log(`Hi! My name is ${name}, I'm ${age} years old and ${height} cm tall.`)
    }
}

class basketballPlayer extends Person {
    profession = this.profession;

    constructor(name, age, height, profession) {
        super(name, age, height);
        this.profession = profession;
    }

    introducePerson(name, age, height, profession) {
        console.log(`Hi! My name is ${name}, I'm ${age} years old, ${height} cm tall and a ${profession}.`)
    }
}

// const newPerson = new Person();
// newPerson.introducePerson("Eve", 25, 160);

// const newAthlet = new basketballPlayer();
// newAthlet.introducePerson("Adam", 15, 180, "basketball player");

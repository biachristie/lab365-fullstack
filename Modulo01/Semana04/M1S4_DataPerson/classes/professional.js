import { Person } from "./person.js";

export class Professional extends Person {
    profession = this.profession;

    constructor(name, age, height, profession) {
        super(name, age, height);
        this.profession = profession;
    }

    introducePerson() {
        console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old, ${this.height} cm tall and a ${this.profession}.`)
    }
}
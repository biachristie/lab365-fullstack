export class Person {
    name = this.name;
    age = this.age;
    height = this.height;

    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    introducePerson() {
        console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old and ${this.height} cm tall.`)
    }
}
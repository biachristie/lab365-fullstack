// --------------------------------------------------------------------------------------------
// Exercício 05

import { Person } from "./classes/person.js";
import { Professional } from "./classes/professional.js";

const newPerson = new Person("Eve", 25, 160);
newPerson.introducePerson();

const basketballPlayer = new Professional("Adam", 15, 180, "basketball player");
basketballPlayer.introducePerson();
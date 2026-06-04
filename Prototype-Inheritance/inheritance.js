const person = {
    name: "Selvi",
    age: 22
}

const person1 = Object.create(person);

person1.greet = function() {
    console.log("hello," + this.name);
}

person1.greet();
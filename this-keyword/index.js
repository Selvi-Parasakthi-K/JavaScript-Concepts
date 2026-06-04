function sayHello(message) {
    console.log(`${message}, ${this.name}`);
}

const person = { name: "Selvi" };

//call method
sayHello.call(person, "hello");

//apply method
sayHello.apply(person, ["hi"]);

//bind method
const sayHelloPerson = sayHello.bind(person);
sayHelloPerson("hey");
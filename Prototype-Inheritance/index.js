function name() {
    this.name = "Selvi";
}

name.prototype.greet = function() {
    console.log("Hello," + this.name);
}

const p1 = new name();
p1.greet();

function outer() {
    var name = "Selvi";
    function inner() {
        console.log(name);
        name = "Selvi Parasakthi";
    }
    return inner;
}

var closure = outer();
closure();
closure();
closure();

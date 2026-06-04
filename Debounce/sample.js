const user = {
  name: "John",
  print() {
    console.log(this.name);
  },
};

user.print(); // John ✅

const x = user.print;
console.log(x); // [Function: print] ✅
x(); // undefined ❌

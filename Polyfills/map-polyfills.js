const arr = [1, 2, 3, 4, 5];

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function(fn) {
        const result = [];
        for(let i = 0; i < this.length; i++) {
            const value = fn(this[i]);
            result.push(value);
        }
        return result;
    }
}

console.log(arr.myMap(item => item * 2));
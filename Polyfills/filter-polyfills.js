arr = [1, 2, 3, 4, 5];

if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(fun) {
        const result = [];
        for(let i = 0; i < this.length; i++) {
            if(fun(this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    }
}

console.log(arr.myFilter(item => item % 2 === 0));
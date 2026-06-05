const arr = [1, 2, 3, 4, 5];

if(!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(fn, initVal) {
        var accum = initVal; ;
        for(let i = 0; i < this.length; i++) {
            accum +=  fn(initVal, this[i]);
        }
        return accum;
    }
}

console.log(arr.myReduce((item, val) => item + val , 0));
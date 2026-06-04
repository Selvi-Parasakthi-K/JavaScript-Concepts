let promiseEx = new Promise((resolve, reject) => {
    var value = 3;

    if(value % 2 == 0) resolve("Even");
    else reject("odd");
})

console.log(promiseEx);

promiseEx.then((message) => console.log(message))
         .catch((error) => console.log(error));
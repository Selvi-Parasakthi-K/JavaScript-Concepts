window.addEventListener(
    "scroll",
    throttle((e) => handleScroll(), 5000)
);

function handleScroll() {
    console.log("Scroll event is triggered at", new Date().toLocaleTimeString());
}

function throttle(fn, delay) {
    let scroll = false;
    
    return function(...args) {
        if(scroll) return;
        fn(...args);
        scroll = true;
        setTimeout(() => {
            scroll = false;
        }, delay);
    }
}
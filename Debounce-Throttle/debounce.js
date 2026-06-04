document.getElementById("inputfield").addEventListener(
    "input",
    debounce((e) => handleSearch(e.target.value), 500)
);

async function handleSearch(query) {
    const resultDiv = document.getElementById("results");
    if(!query) {
        resultDiv.innerHTML = "";
        return;
    }
    resultDiv.innerHTML = "Loading...";

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        
        const filteredItems = data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
        displayResults(filteredItems);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayResults(results) {
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = results.map(item =>
        `<div>${item.title}</div>`
    ).join("");
}

function debounce(func, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

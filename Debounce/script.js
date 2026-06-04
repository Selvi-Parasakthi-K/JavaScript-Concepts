document.getElementById("searchInput").addEventListener(
  "input",
  debounce((e) => handleSearch(e.target.value), 500),
);

async function handleSearch(query) {
  const resultDiv = document.getElementById("results");
  if (!query) {
    resultDiv.innerHTML = "";
    return;
  }

  resultDiv.innerHTML = "Loading...";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );

    displayResults(filtered);
  } catch (error) {
    resultDiv.innerHTML = "Error Fetching Data";
  }
}

function displayResults(results) {
  const resultDiv = document.getElementById("results");

  if (results.length === 0) {
    document.getElementById("results").innerHTML = "No results found.";
  }

  resultDiv.innerHTML = results
    .map(
      (item) =>
        `<div class="card">
        <h4>${item.title}</h4>
        <p>${item.body}</p>
      </div>`,
    )
    .join("");
}

function debounce(func, delay) {
  let timer;

  return function (...args) {
    console.log(args);
    console.log("this:",this);
    console.log("value",args[0].target.value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

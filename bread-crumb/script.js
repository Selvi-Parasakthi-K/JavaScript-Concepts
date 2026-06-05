const items = ["Home", "Products", "Mobiles", "iPhone"];

const breadcrumb = document.getElementById("breadcrumb");

breadcrumb.innerHTML = items.map((item, index) => `
    <li>
        ${item}
        ${index < items.length - 1 ? " > " : ""}
    </li>
`).join("");
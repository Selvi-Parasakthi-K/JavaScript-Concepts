const button = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");
const model = document.getElementById("modal");

button.addEventListener("click", function() {
    model.showModal();
});

closeButton.addEventListener("click", function() {
    model.close();
})
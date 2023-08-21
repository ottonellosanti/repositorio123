
const dataElement = document.getElementById("data");


const savedData = localStorage.getItem("userInput");
if (savedData) {
    dataElement.textContent = savedData;
} else {
    dataElement.textContent = "No hay dato almacenado en localStorage.";
}
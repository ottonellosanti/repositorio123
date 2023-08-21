
const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");



buttonText.addEventListener("click", function() {
    const inputValue = inputText.value;
    localStorage.setItem("userInput", inputValue);
    console.log("Dato guardado en localStorage:", inputValue);
});
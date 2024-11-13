//// it is the chatgpt code


// Select the input field where the calculation is displayed
const display = document.getElementById("input");

// Add event listeners to each button
document.getElementById("clear").onclick = () => clearDisplay();
document.getElementById("delete").onclick = () => deleteLast();
document.getElementById("seven").onclick = () => addToDisplay("7");
document.getElementById("eight").onclick = () => addToDisplay("8");
document.getElementById("nine").onclick = () => addToDisplay("9");
document.getElementById("four").onclick = () => addToDisplay("4");
document.getElementById("five").onclick = () => addToDisplay("5");
document.getElementById("six").onclick = () => addToDisplay("6");
document.getElementById("one").onclick = () => addToDisplay("1");
document.getElementById("two").onclick = () => addToDisplay("2");
document.getElementById("three").onclick = () => addToDisplay("3");
document.getElementById("zero").onclick = () => addToDisplay("0");
document.getElementById("dot").onclick = () => addToDisplay(".");
document.getElementById("add").onclick = () => addToDisplay("+");
document.getElementById("sub").onclick = () => addToDisplay("-");
document.getElementById("mul").onclick = () => addToDisplay("*");
document.getElementById("divison").onclick = () => addToDisplay("/");
document.getElementById("ans").onclick = () => calculate();

// Optional: You can add functionality for percentage and plus-minus if needed

// Function to display values
function addToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);  // Evaluate the expression in the display
    } catch (error) {
        display.value = "Error";  // Display "Error" if the expression is invalid
    }
}

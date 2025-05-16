let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculateResult() {
    try {
        display.innerText = Function(`return ${display.innerText}`)();
    } catch {
        display.innerText = "Error";
    }
}
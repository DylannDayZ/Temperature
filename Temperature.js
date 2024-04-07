window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // Grabbing of elements

    //add event listener for the button
    const btn = document.getElementById("convertbutton");
    btn.addEventListener("click", convertButtonClicked);

    //grab the two input text boxes
    const celsInput = document.getElementById("cInput");
    const fahrInput = document.getElementById("fInput");

    celsInput.addEventListener("input", function () { clearTextBox(fahrInput); });
    fahrInput.addEventListener("input", function () { clearTextBox(celsInput); });
}


//Clears out text
function clearTextBox(textInput) {
    textInput.value = "";
}

function convertCtoF(degreesCelsius) {
    return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5 / 9;
}

function convertButtonClicked() {
    //grab all the things so that we can manipulate
    const celsInput = document.getElementById("cInput");
    const fahrInput = document.getElementById("fInput");
    const weatherImg = document.getElementById("weatherImg");
    const errMsg = document.getElementById("errorMessage");

    //if there was an error message beforehand when calculating clear it.
    errMsg.innerHTML = "";

    //Convert based on which has text
    //Convert to f
    if (celsInput.value.length > 0) {
        const celsius = parseFloat(celsInput.value);
        if (!isNaN(celsius)) {
            fahrInput.value = convertCtoF(celsius);
        } else {
            errMsg.innerHTML = celsInput.value + " is not a number";
        }
    }
    //else if fahr to celsius
    else if (fahrInput.value.length > 0) {
        const fahrenheit = parseFloat(fahrInput.value);
        if (!isNaN(fahrenheit)) {
            celsInput.value = convertFtoC(fahrenheit);
        } else {
            errMsg.innerHTML = fahrInput.value + " is not a number";
        }
    }

    const fahr = parseFloat(fahrInput.value);

    if (!isNaN(fahr)) {
        if (fahr < 32.0) {
            weatherImg.src = "cold.png";
            weatherImg.alt = "cold";
        } else if (fahr > 50.0) {
            weatherImg.src = "warm.png";
            weatherImg.alt = "warm";
        } else {
            weatherImg.src = "cool.png";
            weatherImg.alt = "cool";
        }
    }
}
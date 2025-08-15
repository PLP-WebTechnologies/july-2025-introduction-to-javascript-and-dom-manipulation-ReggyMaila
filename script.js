


// =============================
// Part 1: Variables & Conditionals
// =============================

// Capture elements
const ageInput = document.getElementById("userAge");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

// Event listener for checking age
checkAgeBtn.addEventListener("click", () => {
    let age = Number(ageInput.value);

    // Conditional logic
    if (isNaN(age) || age <= 0) {
        ageResult.textContent = "Please enter a valid positive age.";
    } else if (age < 18) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "You are an adult.";
    }
});

// =============================
// Part 2: Functions
// =============================

// Function to calculate sum
function calculateSum(a, b) {
    return a + b;
}

// Function to display result in DOM
function displaySum() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("sumResult").textContent = "Enter valid numbers.";
    } else {
        document.getElementById("sumResult").textContent = 
            `The sum is: ${calculateSum(n1, n2)}`;
    }
}

document.getElementById("sumBtn").addEventListener("click", displaySum);

// =============================
// Part 3: Loops
// =============================
document.getElementById("loopBtn").addEventListener("click", () => {
    const numberList = document.getElementById("numberList");
    numberList.innerHTML = ""; // Clear existing list

    // For loop example
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = `Number ${i}`;
        numberList.appendChild(li);
    }
});

// =============================
// Part 4: DOM Manipulation
// =============================

// Change header text
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.querySelector("header h1").textContent = "Header Text Changed!";
});

// Toggle theme
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
    const list = document.getElementById("dynamicList");
    let newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});


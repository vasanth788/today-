// Department Store Calculator


function additionDept(a, b) {
    return a + b;
}

function subtractionDept(a, b) {
    return a - b;
}

function multiplicationDept(a, b) {
    return a * b;
}

function divisionDept(a, b) {
    return b !== 0 ? a / b : "Division by zero not allowed";
}

function squareDept(a) {
    return a * a;
}

function cubeDept(a) {
    return a * a * a;
}

function departmentStoreCalculator() {
    const choice = prompt(
        "Welcome to the Department Store Calculator!\n" +
        "Choose a department:\n" +
        "1. Addition Department\n" +
        "2. Subtraction Department\n" +
        "3. Multiplication Department\n" +
        "4. Division Department\n" +
        "5. Square Department\n" +
        "6. Cube Department"
    );

    let a, b, result;

    switch (choice) {
        case '1':
            a = parseFloat(prompt("Enter first number:"));
            b = parseFloat(prompt("Enter second number:"));
            result = additionDept(a, b);
            alert("Result from Addition Department: " + result);
            break;
        case '2':
            a = parseFloat(prompt("Enter first number:"));
            b = parseFloat(prompt("Enter second number:"));
            result = subtractionDept(a, b);
            alert("Result from Subtraction Department: " + result);
            break;
        case '3':
            a = parseFloat(prompt("Enter first number:"));
            b = parseFloat(prompt("Enter second number:"));
            result = multiplicationDept(a, b);
            alert("Result from Multiplication Department: " + result);
            break;
        case '4':
            a = parseFloat(prompt("Enter first number:"));
            b = parseFloat(prompt("Enter second number:"));
            result = divisionDept(a, b);
            alert("Result from Division Department: " + result);
            break;
        case '5':
            a = parseFloat(prompt("Enter number for square:"));
            result = squareDept(a);
            alert("Result from Square Department: " + result);
            break;
        case '6':
            a = parseFloat(prompt("Enter number for cube:"));
            result = cubeDept(a);
            alert("Result from Cube Department: " + result);
            break;
        default:
            alert("Invalid department selected.");
    }
}

departmentStoreCalculator();
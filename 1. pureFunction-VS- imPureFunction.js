// pure function
const addByTwo = num => {
    return num + 2;
}

addByTwo(3); // 5

// impure function 1: Accessing variables outside the function scope
const name = "Rendi Wijiatmoko";

const introduceName = () => {
    return `Hallo my name is ${name}`;
}

introduceName(); // "Hallo my name is Rendi Wijiatmoko"


// impure function 2: Not returning any value
const divideByTwo = num => {
    const result = num / 3;
}

divideByTwo(); // undifined

// impure functiion 3: Possibility to return different values for single input
const addUsingMath = num => {
    const randomNumber = Math.floor(Math.random()*10);
    return num + randomNumber;
}
addUsingMath(3); // 5
addUsingMath(3); // 7
addUsingMath(3); // 9
// for num = 3, the function returns different values

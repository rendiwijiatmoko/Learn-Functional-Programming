# Functional Programming
<p align="center">
  <img src="./img/fjs.png">
</p>

## Pure Function
> Pure function is a function that, given the same inputs, will always return the same outputs.

there are some rules to write FP(Functional Programming) style:
1. Function must be pure
2. Function may not use value from variables thatare not parameters.
3. Function must return a value.

Let's look at an example
```js
const addByTwo = num => {
    return num + 2;
}

addByTwo(3); // 5
```
as we can see a function `addByTwo` recive one parameter that is `num`, then the process inside the function will return a value added by two.

The example above looks very simple and general, so maybe we will understand better if we see examples of not pure function(impure).

```js 
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

```

## The power of Immutability
Immutable data structures are data structures that cannot be changed(mutated) after they are created. This has the advantage that we avoid `side-effects`, where a process can affect the value of a variable globally and cause errors that are relatively difficult to debug.

Let's look at an example in file `2. immutablity-VS-mutability.js`.

## Higher Order Functions
Higher-Order-Functions (HOC) are functions that accept arguments or parameters in the form of functions. Before hearing the HOC, maybe we've heard a callback in JavaScript. Yes, a callback function is a function that is sent as a parameter to the HOC. The simplest example of implementing a HOC is the filter function.

## Currying
Currying is the process of taking a function with multiple arguments and returning a series of functions that take one argument and eventually resolve to a value.

Let's look at an example in file `4. Currying.js`.
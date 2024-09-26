// Declarative Functions

function helloOne() {
    console.log('Hello One!')
}

helloOne()

// Annoymus function

var helloTwo = function() {
    console.log('Hello Two!')
}

helloTwo()

// ES6 functiona syntax or arrow function

var helloThree = () => {
    console.log('Hello Three!')
}

helloThree()

// function with argument

function printName(name, lastName) {
    console.log(name +' '+lastName)
}

printName('KEDAAR','KULKARNI')

// function with return

function multiplyByTwo(Number) {
    var result = Number * 2
    return result
}

console.log('The result is: '+multiplyByTwo(5))


// import function

import { printAge } from "../Helpers/printHelpers.js"
printAge(43)


// import everything

import * as Helper from '../Helpers/printHelpers.js'
Helper.printAge(39)


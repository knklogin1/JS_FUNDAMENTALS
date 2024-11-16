// 1

// function fruit() {

//     console.log(name)
//     console.log(price)


// var name = "Apple"         // the variable should define at the beginning
// let price = 20

// }

// fruit()

//2 ===================================================================
// Using setTimeout function 


// for(var i=0;i<3;i++){          // var has a global scope so while using settimeout the loop finished the execution 
//     setTimeout(()=>console.log(i),1)
// }

// for(let i=0;i<3;i++){          // var has a global scope so while using settimeout the loop finished the execution 
//     setTimeout(()=>console.log(i),1)
//}


//3 ===================================================================


// console.log(+true)      // true will return binary number either 0 or 1
// console.log(typeof +true)    // returns the type of value which will returned by +true i.e. 'number'

// console.log(!"Anil")    // naggation is used. when it is used then the string value will return as 'False'
// console.log(typeof "Anil")


// 4=========================================================================

// let data = "size"
// const bird = {size:"small"}

// console.log(bird[data])    // let data = size, and when bird[data] is used, it will treat as a object parameter like bird.size.
// console.log(bird["size"])  // returns the value of size present in bird.
// console.log(bird.size)
// console.log(bird.data)   // returns Undefined as data is not a object inside bird

//5 ==========================================================================

// let c = {name: "Anil"}
// let d

// d=c
// console.log(d)
// c.name = "Peter"
// console.log(d.name)    // when the value c.name is changed then it will accessed to d as well.

// 6 =========================================================================

// var x
// var x = 10
// var x = 25

// console.log(x)   // same variable can be declared multiple times.


//7 ==========================================================================

// let a = 3
// let b = new Number(3)

// console.log(a==b)   // checking the values are equal using ==
// console.log(a===b)   // checks the strict comparision using ===
// console.log(typeof b)
// console.log(typeof a)

//8 ==========================================================================

// let name
// let nmae = "Kedar"

// console.log(name)   // console will pring 'Undefined as name has not assigned any value.

//9 =========================================================================

// function fruit() {
//     console.log("Woof!")
    
// }

// fruit.name="Apple"


// fruit()     // should return the value of Woof! only. 

//10 =======================================================================

// function sum(a,b) {
//     return a+b
// }

// console.log(sum(1,"2"))    // when any numeric value and string has been passed , then it will concatenate and returns a combined value

// 11 ======================================================================

// let number = 0
// console.log(number)
// console.log(number++)   // prints the number value first and then make increment
// console.log(++number)   // increment the value first and then print. Now initial number valu is 1
// console.log(number)

//12 =======================================================================

// function getAge(...args) {     // this is spread operator
//     console.log(typeof args)    // In JS there is nothing like array its a object only.
// }    //The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// getAge(21)


//13 ==========================================================================

// function getAge() {    
//    // 'use strict'        // when this word is used then there is mandatory that variable should be declared with its datatype like 'let'
//      age = 21
//     console.log(age)    
// }

// getAge()

//14 ===========================================================================

// const sum = eval('10*10+5')     // eval - function is used to convert string value into int value
// console.log(sum)

//15 ===========================================================================

// const object = {1:"a",2:"b",3:"c"}

// console.log(object.hasOwnProperty("1"))   // returns true or false
// console.log(object.hasOwnProperty(1))       // returns true or false

//16 ==========================================================================

// const obj = {a:"one", b:"two",a:"repeat"}       // O/p is a:repeat,b:two as 2nd value overlapped to first one.

// console.log(obj)

//17 =========================================================================

// for (let i=1;i<5;i++) {
//     if(i===3) 
//         continue        // this will skip the value when i=3
//     console.log(i)
// }

//18 =========================================================================

// const foo = () => console.log('First')
// const bar = () => setTimeout(() => console.log('Second'))  // this function will execute after all functions
// const baz = () => console.log('Thrid')

// bar()
// foo()
// baz()

//19 ========================================================================


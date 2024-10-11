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
// }


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

let number = 0
console.log(number)
console.log(number++)   // prints the number value first and then make increment
console.log(++number)   // increment the value first and then print. Now initial number valu is 1
console.log(number)

//12 =======================================================================
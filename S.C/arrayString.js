let str = "Hello, How are you?"
console.log([str])
console.log(str.split(''))
console.log(str.split(' '))
console.log(str.split('a'))
console.log(str.replace('H',"_"))  // only remove first 'H' char
console.log(str.replace(/H/g,"_"))  // remove all 'H' chars
console.log(str.substring(6,10))  // only shows the string withing given indexing
console.log(str.substring(1,str.length-1))

let temp = str.split('o')
console.log(temp[0])


console.log(str.split("").reverse().join(""))

//============================================================================

let data = [4,7,1,4,9,2,4,1]
//data.length = 4
console.log(data)
console.log(data.reduce((x,y)=>x+y))   // arithmetic operations of array values

let unique = new Set(data)
console.log([...data])      // this is spread operator

//============================================================================

let x=10
let y=40
//x=(x++,x)   // comma operator. it has 2 values and you can do arithmetic operations
//console.log(x)


x=(x+=20,x)
console.log(x)

//=========================================================================

let m= 10,n = 20   // swapping the numbers using de-structure method
[m,n]=[n,m]
console.log(m,n)
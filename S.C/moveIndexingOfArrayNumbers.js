let input = [5,7,0,1,0,0,9,6]

let shiftZeroToRight = (arr) => {       // overloaded function where 'arr' is pointing to 'input' array
    let nonZeroArr = arr.filter(val => val != 0)
    let zeroCount = arr.length - nonZeroArr.length
    let res = [...nonZeroArr, ...Array(zeroCount).fill(0)]
    return res

}

console.log(shiftZeroToRight(input))


// var helloThree = () => {          // this is function defined. Reference for line no. 3. 
// console.log('Hello Three!')}



//=========================================================================


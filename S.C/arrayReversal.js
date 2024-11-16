//const str = [1,2,3,4,5,6]
 const str = "Hello, How are you?"
const reverse = reverseArray(str)
console.log(reverse)

function reverseArray(str) {

    let temp = ""

    for(let c of str) {
        //temp = temp + c
        temp = c + temp
    }
    return temp
}
const str = [1,2,3,4,5,6]
const reverse = reverseArray(str)
console.log(reverse.split(""))

function reverseArray(str) {

    let temp = ""

    for(let c of str) {
        temp = temp + c
        //temp = c + temp
    }
    return temp
}
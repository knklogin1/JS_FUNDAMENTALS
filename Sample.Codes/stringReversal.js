
const str = "KEDAR"
const reverse = reverseString(str)

console.log(reverse)

function reverseString(str) {
    let temp = ""
    for (let c of str) {
        temp = c+temp
    }
    return temp
}
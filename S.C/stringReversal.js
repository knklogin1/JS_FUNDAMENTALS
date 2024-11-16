
// const str = "KEDAR"
// let len = str.length
// const reverse = reverseString(str,len)

// console.log(reverse)

// function reverseString(str,len) {
//     let temp = ""
//     //for (let c of str) {

//      //temp = c+temp
//     //}

//     for(let i=0;i<len;i++) {
    
//         temp = str[i]+temp
//     }
//     return temp
// }

let str = "Hi i am Kedar"

const reverse = reverseArray(str) 
console.log(reverse.split(' '))

function reverseArray(str) {

    let temp = ''

    for(let c of str) {
        temp=c+temp
    }

    return temp

}






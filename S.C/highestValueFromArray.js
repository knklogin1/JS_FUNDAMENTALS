let arr = [4,5,7,12,33,6]
let len = arr.length

let highest = 0
let max = -Infinity
let min = -Infinity



for(let i = 0; i < len; i++) {
    if(arr[i] > highest) {
        highest = arr[i]
    }
}

for(let j = 0; j < len; j++) {
   max = Math.max(max, arr[j])
    min = Math.min(min, arr[j])
}



console.log(highest)
console.log(max)

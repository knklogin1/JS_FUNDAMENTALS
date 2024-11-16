let arr = [22,4,2,7,1,5]
let len = arr.length


let temp
 

for(let i = 0; i < len; i++) {
    for(let j; j < len; j++){
        if(arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    
   
}

console.log('The Second highest value is:: '+[len-1])

// 2nd way == sorting array to ascending order

arr.sort((a,b)=>a-b)   // first sort in ascending order & then check the third highest number
console.log('The third highest value is:: '+[len-2])

//===========================================================================

let result = arr.sort((a,b)=>b-a)   // first sort in descending order & then check the third highest number
console.log(result)
console.log('The smallest value is:: '+arr[len-1])
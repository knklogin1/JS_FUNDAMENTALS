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

console.log([arr.length-1])

// 2nd way == sorting array to ascending order

console.log('The sorted array is',arr.sort((a,b)=>a-b))
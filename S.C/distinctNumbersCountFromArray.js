let arr = [ 10,20,20,30,20]; 
let n = arr.length; 

const result = countDistinct(arr,n)
console.log(result)


function countDistinct(arr, n) 
{ 
    let res = 1; 

    // Pick all elements one by one 
    for (let i = 1; i < n; i++) { 
        let j = 0; 
        for (j = 0; j < i; j++) 
            if (arr[i] === arr[j]) 
                break; 

        // If not printed earlier, then print it 
        if (i === j) 
            res++; 
    } 
    return res; 
} 


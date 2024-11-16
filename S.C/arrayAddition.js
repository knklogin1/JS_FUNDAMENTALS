let arr1 = [5,10,15]
let arr2 = [15,10,5]

function execution(arr1,arr2) {
     let temp
    // let rev = arr1.sort((a,b)=>b-a)
   // console.log(rev)
    for(let i=0;i<arr1.length;i++) {

            temp = arr1[i]+arr2[i]
            console.log(temp)
 
        
    }
    
    
}

const res = execution(arr1,arr2)
console.log(res)


    
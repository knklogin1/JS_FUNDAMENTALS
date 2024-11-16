function countUnique(array) {

    if(array.length>0){
        let i = 0

        for(let j=1;j<array.length;j++) {
            if(array[i] !== array[j]) {
                i++
                array[i] = array[j]         // to change the value of 'i' taking from 'j'
            }

        }
        return i+1 

    } else {
        throw new Error("Array is Empty")
    }
}

const result = countUnique([1,22,3,4,6,7,7,3,3,8,8,9])   // array defined
console.log(result)
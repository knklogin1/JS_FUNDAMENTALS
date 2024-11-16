// let str = "kedarI"   //let str = "ApanamaADoctorAnUmbrella"
// let len = str.length
// let vowels = ['a','e','i','o','u','A','E','I','O','U']
// //let vowels = "aAeEiIoOuU"
// let len_vowels = vowels.length



// function result() {
//     let vowelsCount=0
//       for(let x=0;x<=len_vowels;x++){
//         for(let j=0;j<=len;j++) {
//         if(str[j]==vowels[x]) {
//             vowelsCount++
//         }
        
//     }
//     return vowelsCount
//   }
// }
//  console.log(result())  

 //============================================================

 let str = "ApanamaADoctorAnUmbrella"
 let strLen = str.length

 let vowels = ['a','A','e','E','i','I','o','O','u','U']
 let lenVowels = vowels.length

 let result = execution(str,vowels)
console.log(result)

function execution(str,vowels) {

  let count = 0

  for(let c of str) {
    //console.log(c)
    for(let d of vowels) {
      if(c==d) {
        console.log(d)
        count=count+1
      }
    }
    
  }
  return count


}

//====================================================================

// function execution1(str) {
//   //let x = str.toLowerCase()
//   return str.replace(/[^aAeEiIoOuU]/g,"").length

// }

// let result1 = execution1(str)
// console.log(result1)

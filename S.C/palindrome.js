let word = "level"; 
let len = word.length

console.log(checkPalindrome(word,len))

function checkPalindrome(word,len) {  
    let temp = ''
    for(let c of word) {
        temp=c+temp
        
    }
    
    console.log(temp)
    
    
   if(word==temp) {
        return true
   } else {
    return false
   }
}

//======================================================================================


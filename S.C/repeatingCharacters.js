let str = "character"
let len = str.length
execution(str,len)

function execution(str,len) {

const charcount = {}

  for(let char of str) {
    charcount[char] = (charcount[char] || 0) +1
  }

  for(let char in charcount)  {
    if(charcount[char]>1) {
      console.log(char)
    }

  }


}




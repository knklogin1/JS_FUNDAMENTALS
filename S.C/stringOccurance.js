// const str = "SHANNKAR"
// let count = 0

// for(let a="A";a<"z";a++){
//     for (let i = 65; i <= 90; i++) {
//         console.log(String.fromCharCode(i))
//         if(String.fromCharCode(i)==str.charAt(i)){
//             console.log(str.charAt(i))
        
//     count=0
    

//     for(let i=0;i<str.length;i++){
//         if(String.fromCharCode(i)==str.charAt(i)){
//             count=count+1
//         }
//     }
//     if(count>0){
//         console.log(count)
//     }
// }

//===========================================================================================

// const str = "SHANKAR"
// let count = 0

// for(let i=0;i<str.length;i++){
//     if(str[i]=='A') {
//         count++
//     }
// }
// console.log('The occurance for "A" is:: '+count)


//============================================================================================

function countString(str, Letter) {
    let count=0

    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==Letter) {
            count++
        }

    }
    return count

}

// const string = prompt('enter the string: ')
// const letterToCheck = prompt('enter string to ckeck ')

const result = countString('SHANKAR','A')
console.log(result)

//===============================================================

let str = "Synechron"
let len  = str.length

let result1 = Execution(str,len)
console.log('The occurance for letter "n" is:  '+result1)

function Execution(str,len) {
	
	let count = 0
	let input = 'n'
	for(let i=0;i<len;i++) {

	    if(str[i]==input) {

	     count = count+1

        }
    }

return count



}









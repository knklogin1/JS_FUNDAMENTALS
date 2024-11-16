let str = "this is kedar"
let arr = str.split(" ").join("").split("")

let chkCapLetter = arr.some((val,i)=> val==val.toUpperCase() && i!=0)
if(chkCapLetter) {
    console.log("Please do not use capital letter")
}
else {
    console.log("Correct!!!")
}
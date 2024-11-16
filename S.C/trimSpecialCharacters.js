let str = "^5K&&E5478D7A%$R"

let arr = str.split("")   // split method used to convert string to array

let removeCharFromArray = arr.filter(val => {   // filter method is used to remove unwanted characters
    return val.toLowerCase() != val.toUpperCase()
})

let result = removeCharFromArray.join("")
console.log(result)

















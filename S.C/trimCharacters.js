let str =  "a3b2c4"
console.log(str.replace(/\D/g,''))
console.log(str.match(/[^\d.-]/g,"").join())

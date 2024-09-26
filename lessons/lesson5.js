// logical "AND" operators

console.log(true && true) // all values have to be TRUE for expression to be true

// logical "OR" operator

console.log(true || true) // any value should be TRUE for the expression to be TRUE

// Example

var ageIsMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDriverLiscense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: '+eligibilityForDriverLiscense)

var ageIsMoreThanEighteen = false
var isUSCitizen = false

var eligibilityForDriverLiscense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: '+eligibilityForDriverLiscense)

// logical "NOT" operator
console.log(!true)
console.log(6 !== 10)

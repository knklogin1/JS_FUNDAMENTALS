// concatenation and interpolation
var price=50
var itemName="cup"
var messageToPrint="The price for your "+itemName+" is "+price+" dollars." // concatenation
console.log(messageToPrint)
var messageToPrint1=`The price for your ${itemName} is ${price} dollars.` // interpolation - only syntax change but feature is same.
console.log(messageToPrint1)
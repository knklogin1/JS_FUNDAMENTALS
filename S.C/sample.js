const Area = function(l) {
    return function(b) {
        return function(h) {
            return l*b*h
        }
    }
}
console.log(Area(20)(30)(60))

//ANS should be 36000
//=================================================================

let arr = ["raj","Ravi","Sonal","Sam"]
let result =arr.sort((acc,curr)=>acc<curr?1:-1)
console.log(result)

// ANS = [ 'raj', 'Sonal', 'Sam', 'Ravi' ]
//=================================================================

function a() {
    var x=10
    function b() {
        var x = 20
    }
    b()
}
a()
console.log(a())   

// ANS - Undefined

//================================================================

let array = [1,2,3,4,5,'Kedar']     // array can be defined in this way as well
console.log(array)


//===============================================================

let p = 10
let q = "20"
let r = p+q
console.log(r)
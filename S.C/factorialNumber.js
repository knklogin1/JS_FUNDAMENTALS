let str = 5

function factorial(str) {

    let ans = 1

    for(let i=2;i<=str;i++) {
        ans = ans*i
    }
    return ans
}

console.log(factorial(str))




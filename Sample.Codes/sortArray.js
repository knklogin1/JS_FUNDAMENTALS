let str = [1,4,3,7,9,23,2,0]

str.sort((a,b)=>a-b)  // sorts an array in ascending order
console.log(str)

//====================================================================================

const people = [{name:"Patric",age: 34,gpa: 2.4},
                {name:"Sandy",age: 27,gpa: 3.0},
                {name:"Harry",age: 48,gpa: 4.0},
                {name:"Spongebob",age: 33,gpa: 1.2},]

people.sort((a,b)=>a.gpa-b.gpa)   //sorts an array in ascending order except "String" value
console.log(people)

people.sort((a,b)=>a.name.localeCompare(b.name))
console.log(people)
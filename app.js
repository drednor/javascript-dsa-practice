const prompt = require("prompt-sync")()

// hello 
/*console.error("this is an error")
console.warn("this is a warning ")
console.log("something like a log")*/

// const v = 64
// console.log(`${v}`)

//const y = prompt("type something : ")

//console.log(`${y}`)

// variable and data types 

/*

DATA TYPES 
string  
boolean
number 
undefined - can be assigned later  
null - will always be null 
bigint 
symbol

VARIABLE
var - functionscope, can be changed later - function scope
let - can be changed later on = blockscope
const - will be the same through out the program. will not change 

*/

const x = 2
const y = "1312"
console.log(x + Number(y))

const a = Number(prompt("enter the number 1 :"))
const b = Number(prompt("enter the number 2 :"))

value = a + b

switch (value){
    case 1:
        console.log("this is one")
        break
    case 2:
        console.log("this is two")
        break
    case 3:
        console.log("this is three")
        break
    case 4:
        console.log("how did this happen") 
        break
    default:
        console.log("always true")
        break;   
    }

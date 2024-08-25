// Primitive

// 7 types : string , number, boolean, null, undefined, symbol, bigInt

const score = 100             // datatype -> number
const scoreValue = 100.3     // datatype -> number

const isLoggedIn =false     // datatype -> boolean
const outsideTemp = null   // datatype -> object
let userEmail;            // datatype -> undefined


const id =Symbol('123')          // datatype -> symbol
const anotherId =Symbol('123')   // datatype -> symbol

// console.log(id === anotherId);

const bigNumber = 3456778654687976568767n    // datatype -> bigInt


// Refrence(Non primitive)

// Array, Objects, Functions



const heros =["shaktiman", "naagraj", "doga"] //object
let myObj ={
    name: "gar",
    age: 20,
}// object

const myFunction = function(){
    console.log("hello world");
} // function

// console.log(typeof heros)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive)---copy, Heap (non-primitive)-----reference banegi original me change

let myYoutubename = "garimabhatiadotcom"

let anothername = myYoutubename
anothername ="gggg"
console.log(anothername);
console.log(myYoutubename)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "garima@google.com"
console.log(userOne.email)
console.log(userTwo.email)


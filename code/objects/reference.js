

let objA = {
    I: "am",
    an: "object"
}

let objB = objA;

let objC = {
    I: "am",
    an: "object"
}

let objD = Object.assign( {} , objA );
let objE = {
    ...objA
};

console.log( objA );
console.log( objB );
console.log( objC );
console.log( objD );
console.log( objE );

objA.I = 2;

console.log( objA );
console.log( objB );
console.log( objC );
console.log( objD );
console.log( objE );

objA = 2;

console.log( objA );
console.log( objB );
console.log( objC );
console.log( objD );
console.log( objE );
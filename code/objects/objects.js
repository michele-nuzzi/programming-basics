
// other languages equivalent are maps

const myObj = {
    property1: 1,
    property2: "string",
    property3: [ 0, 1, 2, 3 ],
    property4: {},
    property5: () => { return true; }
}

const bob = {
    name: "Bob",
    age: 42,
    thingsLiked: [ "Cardano", "HarmonicPool", 69, true ]
}

console.log( myObj );
console.log( myObj["property1"] );
console.log( myObj.property1 );

console.log( myObj.property5() );
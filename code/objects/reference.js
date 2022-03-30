
function modifyRef( obj )
{
    obj.ref = 42;
}

function modifyValue( whatever )
{
    whatever = 69;
    return whatever;
}

const someObj = {
    ref: "a string"
}

let someValue = 2;


console.log( someObj );
// obj (parameter) = someObj
modifyRef( someObj );
console.log( someObj );


console.log( someValue, modifyValue( someValue ), someValue  );
console.log( someObj,   modifyValue( someObj )  , someObj    );
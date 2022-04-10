/*

typeof [] // -> "object"
typeof {} // -> "object"

Object.keys( propNum: 1, propsStr: "str" ) // -> ["propNum", "propStr"]
Object.keys( [1,2,3] ) // -> ["0","1","2"]

Array.isArray({}) // false
Array.isArray([]) // true

*/

function deepCopy( anything )
{
    if( typeof anything !== "object" ) return anything

    if( Array.isArray( anything ) )
    {
        const copiedArray = [];

        for( let i = 0; i < anything.length; i++ )
        {
            copiedArray.push( deepCopy( anything[i] ) );
        }

        return copiedArray;
    }

    const copiedObj = { ...anything };
    const keys = Object.keys( anything );

    for( let i = 0; i < keys.length; i++ )
    {
        copiedObj[ keys[i] ] = deepCopy( anything[ keys[i] ])
    }

    return copiedObj;
}

// ------------------- TESTS ------------------- //

function runTests()
{

    testCopy( 1 );

    testCopy( "string" );
    
    testCopy([ true, "hello", 42 ]);

    testCopy({ I: "am", an: "object?", answer: true })

    testCopy({ 
        subObj: { 
            subSubObj: {}
        }, 
        array: [ 
            { 
                wow: "is this even possible?" 
            }, 
            "yes, yes it is" 
        ], 
        answer: true }
    );
}

runTests();


function testCopy( anything )
{
    const testResult = testEquality( anything, deepCopy(anything) );

    if( testResult.eq )
    {
        console.log("Yuppie! the value \"", anything, "\" was copied correctly");
    }
    else
    {
        console.log("Almost!\nI tried to copy", anything, "\nbut I got the following result:\n\t", testResult.reason )
    }

    console.log("\n")
}

function testEquality( a, b )
{
    if( typeof a !== typeof b ) return { eq: false, reason: `"${a}" and "${b}" were not of the same type` };
    if( typeof a !== "object" ) return { eq: a === b, reason: a === b ? "ok" : `"${a}" and "${b}" were expected to be the same value but not an object`  };

    if( a === b ) return {eq: false, reason: `"${a}" and "${b}" were the same object` }; //

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if( ! aKeys.every( k => bKeys.includes( k ) ) ) return { eq: false, reason: `"${a}" and "${b}" do not have the same properties` } ;

    let testResult = {};
    for( let i = 0; i < aKeys.length; i++ )
    {
        testResult = testEquality( a[ aKeys[i] ], b[ aKeys[i] ] );

        if( !testResult.eq ) return testResult;
    }

    return { eq: true, reason: "ok" };
}
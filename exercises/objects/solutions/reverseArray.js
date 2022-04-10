/*

*/

function getReversedArray( arr )
{
    let reversedArr = [];

    for( let i = 1; i <= arr.length; i++)
    {
        reversedArr.push( arr[ arr.length - i ] )
    }

    return reversedArr;
}

// ------------------- TESTS ------------------- //

function runTests()
{

    testArray([ 1, 2, 3, 4, 5]);

    testArray( Array.from("hello there") );
    
    testArray([ true, "hello", 42 ]);
}

runTests();

function areArraysEqual( arr1, arr2 )
{
    if( arr1.length !== arr2.length) return false;
    
    for( let i = 0; i < arr1.length; i++)
    {
        if( arr1[i] !== arr2[i] ) return false;
    }

    return true;
}

function testArray( arr )
{
    const reversed = getReversedArray( arr );

    if( areArraysEqual( [...arr].reverse(), reversed ) )
    {
        console.log("Yuppie! the array", arr, "got reversed correctly to", reversed );
    }
    else
    {
        console.log("Almost!\nI tried to reverse", arr, "\n and was expecting", [...arr].reverse(), "\nbut I got", reversed )
    }

    console.log("\n")
}
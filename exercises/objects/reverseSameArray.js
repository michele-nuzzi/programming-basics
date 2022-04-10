/*

*/
function swapInArray( arr, index1, index2 )
{
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

function reverseArray( arr )
{

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
    const initial = [...arr];

    reverseArray( arr ); 

    if( areArraysEqual( [...initial].reverse(), arr ) )
    {
        console.log("Yuppie! the array", initial, "got reversed correctly to", arr );
    }
    else
    {
        console.log("Almost!\nI tried to reverse", initial, "\n and was expecting", [...initial].reverse(), "\nbut I got", arr )
    }

    console.log("\n")
}
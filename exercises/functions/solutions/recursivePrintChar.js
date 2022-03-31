/*
As in the previous exercise but recoursive

HINT:
You can create a new string from one you have
containing everything BUT the first char by doing

string.slice(1);

example:

"hello".slice(1) -> "ello"

*/

function recoursivePrintChars( str )
{
    if( str === "" ) return;

    console.log( str[0] );
    
    recoursivePrintChars( str.slice( 1 ) )
}

// ------------------- TESTS ------------------- //

function runTests()
{
    handledCharPrinting( "hello" )
    /*
    EXPECTED:
    
    h
    e
    l
    l
    o
    
    */
    
    handledCharPrinting( "unicorn" )
    /*
    EXPECTED:
    
    u
    n
    i
    c
    o
    r
    n
    
    */
    
    handledCharPrinting( "RoLlEr cOaStEr" )
    /*
    EXPECTED:
    
    R
    o
    L
    l
    E
    r
     
    c
    O
    a
    S
    t
    E
    r
    
    */
}

runTests();


function handledCharPrinting( str )
{
    try
    {
        recoursivePrintChars( str );
        console.log("\n");
    }
    catch (e)
    {
        console.log( "\nare you sure your function ever returns?\n", "\terror occurred on input: " + str + "\n" )
    }
}
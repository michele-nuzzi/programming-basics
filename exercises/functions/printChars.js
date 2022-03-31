/*
given a function that takes a string

write the body such that it prints each character, and only that, once

EXAMPLE:
printChars( "hello" )

'h'
'e'
'l'
'l'
'o'

HINT:
You can access the "n" char of a string by using the "[]" (square brackets) rigth after the string you want to access the char of

example:
"hello"[0] -> 'h'

HINT:
you can get the length of a string by doing "string.length"; this is will give you the number of chars in the string

example:
"hello".length -> 5

*/

function printChars( str )
{

}

// ------------------- TESTS ------------------- //

function runTests()
{

    printChars( "hello" )
    /*
    EXPECTED:
    
    h
    e
    l
    l
    o
    
    */
    
    console.log("\n");

    printChars( "unicorn" )
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

    console.log("\n");
    
    printChars( "RoLlEr cOaStEr" )
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

/*
modify the solution to the previous exercises video so that

the code that appears similar is wrapped in a function

*/


// --------------- define some function here ----------------- //

function isMultipleOf3( n )
{
    return n % 3 === 0;
}

function isMultipleOf5( n )
{
    return n % 5 === 0;
}

// ------------- insert your functon where appropriate ------- //

let fizzBuzzStr = "";

for( let counter = 1; counter <= 100; counter++ )
{

    if( isMultipleOf3( counter ) ) // checks if the current number is a multiple of 3
    {
        fizzBuzzStr += "Fizz";
    }

    if( isMultipleOf5( counter ) ) // checks if the current number is a multiple of 5
    {
        fizzBuzzStr += "Buzz";
    }
    
    if( isMultipleOf3( counter ) || isMultipleOf5( counter ) ) // checks if one of the two condition happened
    {
        console.log( fizzBuzzStr );
    }
    else
    {
        console.log( counter );
    }
    
    fizzBuzzStr = "";
}

/*
expected output
node warm-up.js

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
*/
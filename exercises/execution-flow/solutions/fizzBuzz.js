/*
expected output
node fizzBuzz.js

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

// decalre something if you need
let fizzBuzzStr = "";

for(
    let counter = 1;
    counter <= 100;
    counter++ // equivalent to counter = counter + 1
    )
{
    if(counter % 3 === 0) // checks if the current number is a multiple of 3
    {
        fizzBuzzStr += "Fizz";
    }

    if(counter % 5 === 0) // checks if the current number is a multiple of 5
    {
        fizzBuzzStr += "Buzz";
    }

    if(counter % 3 === 0 || counter % 5 === 0) // checks if one of the two condition happened
    {
        console.log( fizzBuzzStr );
    }
    else
    {
        console.log( counter );
    }

    fizzBuzzStr = ""; // reset the string
}
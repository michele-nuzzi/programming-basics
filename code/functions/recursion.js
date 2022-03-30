
/*
FACTORIAL rules

0! -> 1
1! -> 1
...
n! -> n * (n-1)!

*/

function factorial( n )
{
    if( n < 0 ) return 0;
    if( n === 0 || n === 1 ) return 1;

    return n * factorial( n - 1 );
}


function factorialLoop( n )
{
    if( n < 0 ) return 0;
    let result = 1;

    for(let i = 1; i <= n; i++)
    {
        result *= i;
    }

    return result;
}

for( let n = 0; n < 10; n++)
{
    console.log( n, factorial( n ) );
}

console.log( factorial( 1.5 ) );
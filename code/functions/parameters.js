
function f( x = "default value" )
{
    console.log( x );
};

// f( "whatever" );
// f();

function add( a , b )
{
    return a + b;
}

// console.log( add(1, 2) );

function myMagicOperation( n , shouldDoMagic = false )
{
    if( shouldDoMagic )
    {
        return n * n;
    }
    else
    {
        return n + 2;
    }
}

console.log( myMagicOperation( 3, true  ) );

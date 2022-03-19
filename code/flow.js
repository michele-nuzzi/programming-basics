let myNewVar = 34242432;

if( myNewVar === 2 )
{
    console.log(myNewVar);
    myNewVar = 42;
    console.log( "the switch was on!")
}
else if( myNewVar === 1 )
{
    myNewVar = 69;
    console.log( "the switch was off!")
}
else
{
    console.log( "myNewVar was not 1 or 2")
}

console.log( myNewVar );
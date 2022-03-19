/*
expected output
node forPyramid.js

#
##
###
####
#####
*/

// decalre something if you need
let output = "";

for(
    let counter = 0;
    counter < 5; // fix the condition such that the block is executed only 5 times
    counter++ // equivalent to counter = counter + 1
    )
{
    output += "#"; //  output = output + "#"

    console.log( output ); // put the output here
}
#include <iostream>

void setTo42( unsigned int & n );

int main()
{
    unsigned int aPositiveInt = 2;

    std::cout << aPositiveInt << '\n' << &aPositiveInt << '\n';

    setTo42( aPositiveInt );
    
    std::cout << aPositiveInt << '\n' << &aPositiveInt << '\n';
}

void setTo42( unsigned int & n )
{
    n = 42;
}
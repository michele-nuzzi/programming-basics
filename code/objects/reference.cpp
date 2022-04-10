#include <iostream>

int main()
{
    unsigned int a = 2;
    std::cout << a << '\n' << &a << '\n'; // console.log( a , '\n', &a, '\n' );

    unsigned int b = a;
    std::cout << b << '\n' << &b << '\n';

    unsigned int & c = a;
    std::cout << c << '\n' << &c << '\n';
    c = 69;
    std::cout << c << '\n' << a << '\n'<< b << '\n';
}
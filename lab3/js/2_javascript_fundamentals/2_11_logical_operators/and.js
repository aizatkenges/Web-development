//The difference is that AND returns the first falsy value while OR returns the first truthy one.

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

//When all values are truthy, the last value is returned:
alert( 1 && 2 && 3 ); // 3, the last one
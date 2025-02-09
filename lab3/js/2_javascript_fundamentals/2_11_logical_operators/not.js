//A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non-empty string" ); // true
alert( !!null ); // false
//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.
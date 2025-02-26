/*// simple greeting
console.log("Hello PerScholas my name is Joanne Osman");

//  from Objectives 1-creating variable declarations using both let and const.
let myAge = 39;
const name = Joanne;

// will try to 2 apply different types of data literals.
//from the lesson: Any value that is not a variable is a literal. They are fixed values that you literally provide to your script.
console.log(true);
console.log("Hello World! again");
console.log(42);

//template literal from the lesson
const frost =
    `Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost);

//now 3 using arithmetic operators to manipulate data.
let newNumber = 9;
newNumber -= 3; // newNumber is now equal to 6
newNumber /= 3; // newNumber is now equal to 2
newNumber *= 3; // newNumber is now equal to 6
newNumber %= 3; // newNumber is now equal to 0
console.log(newNumber); // this will type the last value in newNumber

//4-Use comparison operators to compare data.
// this example for my kids
let apples = 5;
let oranges = 3;
//is the number of apples same as orages?
let isAppleorOrange = apples == oranges;
//is the number of apples greater than oranges?
let isMorethan = apple > oranges;
//are oranges less or equal to apples?
let isLessorSame = oranges <= apples;
console.log(isAppleorOrange);

//still 4 comparing strings
let friend1="River";
let friend2="Selena";
//are both same?
let areFreindsSame=friend1==friend2;

//5 Perform string concatenations.
let greet = "Hello" + "," + "Joanne Osman"; // Using +
let greetTemplate = `Hello, Joanne Osman!`; // Using template literals

//6- implement escape sequences in strings for special characters:
/*
Escape sequence	Unicode code point
\0	null character (U+0000 NULL)
\'	single quote (U+0027 APOSTROPHE)
\"	double quote (U+0022 QUOTATION MARK)
\\	backslash (U+005C REVERSE SOLIDUS)
\n	newline (U+000A LINE FEED; LF)
\r	carriage return (U+000D CARRIAGE RETURN; CR)
\v	vertical tab (U+000B LINE TABULATION)
\t	tab (U+0009 CHARACTER TABULATION)
\b	backspace (U+0008 BACKSPACE)
\f	form feed (U+000C FORM FEED)*/
/*let nullCharacter = "This is a null character: \0";
console.log(nullCharacter);
let singleQuote = 'It\'s a sunny day'; // Using \' to include a single quote inside single quotes
console.log(singleQuote);
let doubleQuote = "He said, \"Hello!\""; // Using \" to include double quotes inside double quotes
console.log(doubleQuote);
let backslash = "This is a backslash: \\"; // Using \\ to include a backslash
console.log(backslash);
let newLine = "This is line one.\nThis is line two."; // Using \n to move to a new line
console.log(newLine);
let carriageReturn = "This is before the carriage return.\rThis is after."; // Using \r for carriage return
console.log(carriageReturn);
let verticalTab = "This is before the vertical tab.\vThis is after."; // Using \v for vertical tab (not always visible in consoles)
console.log(verticalTab);
let tab = "This is a tab:\tHere it is after a tab."; // Using \t for tab space
console.log(tab);
let backspace = "This is before\b and this is after."; // Using \b for backspace (removes previous character)
console.log(backspace);
let formFeed = "This is before the form feed.\fThis is after."; // Using \f for form feed (not visible in most consoles)
console.log(formFeed);

//7-Implement escape sequences in strings for special characters.
let message = "This is a very new line\nthis is a tab\tThis is a quote: \"PerSchols\"";

//Use template literals for string interpolation and multi-line strings:
//not sure
*/

//Copy the code from the editor into your own file to use as a starting point. Make sure to commit!
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
const n5 = 5;//new const add to example n5

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log("isUnder25 as an alternative. "+isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //typing results
  console.log("this is CodeSandbox example: " + dontDoThis);

  //checking if all number can be devided by 5
  const isNumberDivided5= (n1%5===0)&&(n2%5===0)&&(n3%5===0)&&(n4%5===0)&&(n5%5===0);

  // check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n5;
console.log("the results of n1 greater than n5 is: " + isFirstLargerThanLast);

// Arithmetic chain:
let result = n2 - n1;            // Subtract the first from the second (15 - 10 = 5)
result = result * n3;            // Multiply the result by the third (5 * 20 = 100)
result = result % n4;            // Find the remainder when dividing by the fourth (100 % 5 = 0)

// Logging the result
console.log("The result of the arithmetic chain is: " +result);

//For example, instead of console.log(isValid), we could write: 
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)

//second activity
// Data
const distance = 1500, money = 175, price = 3;
const mpg55 = 30, mpg60 = 28, mpg75 = 23;
const speed55 = 55, speed60 = 60, speed75 = 75;

// function to get trip info
const trip = (speed, mpg) => {
    const fuel = distance / mpg;
    const cost = fuel * price;
    const hours = distance / speed;
    return { fuel, cost, hours };
  };

  //trip for 55 mph
  const fuel55 = distance / mpg55;
const cost55 = fuel55 * price;
const time55 = distance / speed55;

// Trip details for 60 mph
const fuel60 = distance / mpg60;
const cost60 = fuel60 * price;
const time60 = distance / speed60;

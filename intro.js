// simple greeting
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
let nullCharacter = "This is a null character: \0";
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


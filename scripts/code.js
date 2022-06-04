// This is an in-line comment.

/* This is a
multi-line comment */

// JavaScript Variables
/*  undefined
    null
    boolean
    string '12' or "12"
    symbol
    bigint
    number 12
    object*/

// We tell JavaScript to create or declare a variable by putting the keyword var in front of it
    var ourName;
/*  creates a variable called ourName. 
    Variable names can be made up of numbers, letters, and $ or _, 
    but may not contain spaces or start with a number.  */

// The operator equal sign = stores a value
    var myVar;
    myVar = 5;

    var myVar = 0;

// A string
    var myName = "your name";

// JavaScript all variables and function names are case sensitive. This means that capitalization matters.
/* Write variable names in JavaScript in camelCase. In camelCase, 
multi-word variable names have the first word in lowercase, second word in caps */
    var someVariable;
    var anotherVariableName;z
    var thisVariableNameIsSoLong;

// One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:

    var camper = "James";
    var camper = "David";
    console.log(camper);

/* In the code above, the camper variable is originally declared as James,
   and is then overridden to be David. The console then displays the string David. */

// Use let, a variable with the same name can only be declared once.

/*const is like let with the added bonus that variables declared using const are read-only.
  Constant value, which means that once a variable is assigned with const, it cannot be reassigned*/
    const FAV_PET = "Cats";
    FAV_PET = "Dogs";
    // The console will display an error due to reassigning the value of FAV_PET.
    // uppercase for const
    // camelCase for var and let

    //Use + symbol as an addition operator when placed between two numbers.
    const myVar = 2 + 2;
    //Use the * symbol for multiplication of two numbers.
    const myVar = 2 * 2;
    //Use the / symbol for multiplication of two numbers.
    const myVar = 2 / 2;

    // Increment a number
    i = 10 
    i++
    // 11 is answer
    ++i 
    // 12 is answer
    
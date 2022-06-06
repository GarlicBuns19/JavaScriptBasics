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
    
// The remainder operator % gives the remainder of the division of two numbers.
    // 5 % 2 = 1
    // Math.floor(5 / 2) = 2
    // 2 * 2 = 4
    // 5 - 4 = 1
    // Usage
    // In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
    // 17 % 2 = 1 (17 \'is Odd')
    // 48 % 2 = 0 (48 \'is Even')

    // In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

    myVar = myVar + 5;
    // to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

    // One such operator is the +=, -=, /=, *= operator.

    let myVar = 1;
    myVar += 5;
    console.log(myVar);
    // 6 would be displayed in the console.

    // When you are defining a string you must start and end with a single or double quote. 
    // What happens when you need a literal quote: " or ' inside of your string?

    // In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash 
    // (\) in front of the quote.

    const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
    // This signals to JavaScript that the following quote is not the end of the string,
    //  but should instead appear inside the string. So if you were to print this to the console, you would get:

    // Alan said, "Peter is learning JavaScript".
    // Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

    // I am a "double quoted" string inside "double quotes".
    // Anwser
    const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

    /* String values in JavaScript may be written with single or double quotes,
     as long as you start and end with the same type of quote. Unlike some other programming languages, 
     single and double quotes work the same in JavaScript. */

    const doubleQuoteStr = "This is a string"; 
    const singleQuoteStr = 'This is also a string';
    const conversation = 'Finn exclaims to Jake, "Algebraic!"';
    const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
    // Error below
    // const badStr = 'Finn responds, "Let's go!"';

    // In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

    // Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

    
  /*    Code	Output
        \'	    single quote
        \"	    double quote
        \\	    backslash
        \n	    newline
        \r	    carriage return
        \t	    tab
        \b	    word boundary
        \f	    form feed */

        // FirstLine
        //     \SecondLine
        // ThirdLine

        // Code for above
        const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";

        /* In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. 
        You can build a new string out of other strings by concatenating them together.
        'My name is Alan,' + ' I concatenate.'
        Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself. */

        Example:

        const ourStr = "I come first. " + "I come second.";
        // The string I come first. I come second. would be displayed in the console.
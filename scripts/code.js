// Comment Your JavaScript Code
// This is an in-line comment.
/* This is a
multi-line comment */
// =======================================================================

// Declare JavaScript Variables
// JavaScript Variables
/*  undefined
    null
    boolean
    string '12' or "12"
    symbol
    bigint
    number 12
    object*/
// =======================================================================

    // Storing Values with the Assignment Operator
    // In JavaScript, you can store a value in a variable with the assignment operator (=).

    myVariable = 5;
    // This assigns the Number value 5 to myVariable.

    // If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

    var myVar;
    myVar = 5;
    // First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5.
// =======================================================================

    // Assigning the Value of One Variable to Another
    // After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

    var myVar;
    myVar = 5;
    var myNum;
    myNum = myVar;
    // The above declares a myVar variable with no value, then assigns it the value 5.
    // Next, a variable named myNum is declared with no value.
    // Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.
// =======================================================================

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
// =======================================================================

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
// =======================================================================

// Use let, a variable with the same name can only be declared once.

/*const is like let with the added bonus that variables declared using const are read-only.
  Constant value, which means that once a variable is assigned with const, it cannot be reassigned*/
    const FAV_PET = "Cats";
    FAV_PET = "Dogs";
    // The console will display an error due to reassigning the value of FAV_PET.
    // uppercase for const
    // camelCase for var and let
// =======================================================================

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
// =======================================================================

// The remainder operator % gives the remainder of the division of two numbers.
    // 5 % 2 = 1
    // Math.floor(5 / 2) = 2
    // 2 * 2 = 4
    // 5 - 4 = 1
    // Usage
    // In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
    // 17 % 2 = 1 (17 \'is Odd')
    // 48 % 2 = 0 (48 \'is Even')
// =======================================================================

    // In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

    myVar = myVar + 5;
    // to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

    // One such operator is the +=, -=, /=, *= operator.

    let myVar = 1;
    myVar += 5;
    console.log(myVar);
    // 6 would be displayed in the console.
// =======================================================================

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
// =======================================================================

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
// =======================================================================

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
// =======================================================================

        /* In JavaScript, when the + operator is used with a String value, it is called the concatenation operator.
        You can build a new string out of other strings by concatenating them together.
        'My name is Alan,' + ' I concatenate.'
        Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself. */

        const ourStr = "I come first. " + "I come second.";
        // The string I come first. I come second. would be displayed in the console.

        // Just as we can build a string over multiple lines out of string literals,
        //  we can also append variables to a string using the plus equals (+=) operator.

        const anAdjective = "awesome!";
        let ourStr2 = "freeCodeCamp is ";
        // ourStr += anAdjective;
        // ourStr would have the value freeCodeCamp is awesome!.
// =======================================================================

        // You can find the length of a String value by writing .length after the string variable or string literal.

        console.log("Alan Peter".length);
        // The value 10 would be displayed in the console.
        // Note that the space character between "Alan" and "Peter" is also counted.

        // For example, if we created a variable const firstName = "Ada",
        // we could find out how long the string Ada is by using the firstName.length property.

        // Setup
        let lastNameLength = 0;
        const lastName = "Lovelace";

        // Only change code below this line
        lastNameLength = lastName.length;
        console.log(lastNameLength.length);

        // Bracket notation is a way to get a character at a specific index within a string.
// =======================================================================

        // Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

        // For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

        const firstName = "Charles";
        const firstLetter = firstName[0];

        // Remember that computers start counting at 0, so the first character is actually the zeroth character.
        const firstName2 = "Ada";
        const secondLetterOfFirstName = firstName[1];
        // secondLetterOfFirstName would have a value of the string d.

        // For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

        const firstName3 = "Ada";
        const lastLetter = firstName[firstName.length - 1];
        // lastLetter would have a value of the string a.

        // You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

        // For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]

        const firstName4 = "Augusta";
        const thirdToLastLetter = firstName[firstName.length - 3];
        // thirdToLastLetter would have a value of the string s.
// =======================================================================

        /*We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

        In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

        Consider this sentence - It was really ____, and we ____ ourselves ____. */

        const myNoun = "dog";
        const myAdjective = "big";
        const myVerb = "ran";
        const myAdverb = "quickly";

        // Only change code below this line
        const wordBlanks = "The "+myAdjective+' '+myNoun+' '+myVerb+' '+myAdverb+' '+'.'; // Change this line
        // Only change code above this line
// =======================================================================

        // With JavaScript array variables, we can store several pieces of data in one place.

        // You start an array declaration with an opening square bracket, end it with a closing square bracket,
        // and put a comma between each entry, like this:

        const sandwich = ["peanut butter", "jelly", "bread"];

        // You can also nest arrays within other arrays, like below:

        const teams = [["Bulls", 23], ["White Sox", 45]];
        // This is also called a multi-dimensional array.
// =======================================================================

        // We can access the data inside arrays using indexes.

        // Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character,
        // they are specifying an entry in the array. Like strings,
        // arrays use zero-based indexing, so the first element in an array has an index of 0.

        const array = [50, 60, 70];
        console.log(array[0]);
        const data = array[1];
        // The console.log(array[0]) prints 50, and data has the value 60.
// =======================================================================

        // Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

        const ourArray = [50, 40, 30];
        ourArray[0] = 15;
        // ourArray now has the value [15, 40, 30].

        // Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

        // One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array,
        // the first set of brackets refers to the entries in the outer-most (the first level) array,

        const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14]
        ];

        arr[3];
        arr[3][0];
        arr[3][0][1];
        // arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.
// =======================================================================

        // Note: There shouldn't be any spaces between the array name and the square brackets,
        // like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly,
        // this may confuse other programmers reading your code.

        // An easy way to append data to the end of an array is via the push() function.

        // .push() takes one or more parameters and "pushes" them onto the end of the array.

        const arr1 = [1, 2, 3];
        arr1.push(4);

        const arr2 = ["Stimpson", "J", "cat"];
        arr2.push(["happy", "joy"]);
        // arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
// =======================================================================

        // Another way to change the data in an array is with the .pop() function.

        // .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

        // Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

        const threeArr = [1, 4, 6];
        const oneDown = threeArr.pop();
        console.log(oneDown);
        console.log(threeArr);
        // The first console.log will display the value 6, and the second will display the value [1, 4].
// =======================================================================

        // pop() always removes the last element of an array. What if you want to remove the first?

        // That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

        const ourArray = ["Stimpson", "J", ["cat"]];
        const removedFromOurArray = ourArray.shift();
        // removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].
// =======================================================================

        // Not only can you shift elements off of the beginning of an array,
        // you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

        // .unshift() works exactly like .push(), but instead of adding the element at the end of the array,
        // unshift() adds the element at the beginning of the array.

        const ourArray = ["Stimpson", "J", "cat"];
        ourArray.shift();
        ourArray.unshift("Happy");
        // After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

    //     Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

    // The first element in each sub-array should contain a string with the name of the item. 
    // The second element should be a number representing the quantity i.e.

    ["Chocolate Bar", 15]
    // There should be at least 5 sub-arrays in the list.
    const myList = [['Pop',1],['Pops',2],['Popd',3],['Popf',4],['Popg',5]];

    // In JavaScript, we can divide up our code into reusable parts called functions.

    // Here's an example of a function:

    function functionName() {
    console.log("Hello World");
    }
    // You can call or invoke this function by using its name followed by parentheses, 
    // like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console. 
    // All of the code between the curly braces will be executed every time the function is called.

    // Create a function called reusableFunction which prints the string Hi World to the dev console.
    // Call the function.
    function reusableFunction() {
        console.log('Hi World');
      }
      reusableFunction()

    //   Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
    //   When a function is defined, it is typically defined along with one or more parameters. 
    //   The actual values that are input (or "passed") into a function when it is called are known as arguments.

    //   Here is a function with two parameters, param1 and param2:
      
      function testFun(param1, param2) {
        console.log(param1, param2);
      }
    //   Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. 
    //   Inside the function, param1 will equal the string Hello and param2 will equal the string World. 
    //   Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.
      
    //   Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
    //   Call the function with two numbers as arguments.
    function functionWithArgs(a,b){
        console.log(a + b)
      }
      functionWithArgs(1,2)

    //   We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

    function plusThree(num) {
        return num + 3;
      }
      
      const answer = plusThree(5);
    //   answer has the value 8.
      
    //   plusThree takes an argument for num and returns a value equal to num + 3.
    // Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
    function timesFive(num){
        return num*5
      }
      
    //   Global Scope and Functions
    //   In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. 
    // This means, they can be seen everywhere in your JavaScript code.
      
    //   Variables which are declared without the let or const keywords are automatically created in the global scope. 
    // This can create unintended consequences elsewhere in your code or when running a function again. 
    // You should always declare your variables with let or const.

    // Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
    // Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords
    // Declare the myGlobal variable below this line
    // Global varuable can be used throughout code
    let myGlobal = 10;

    function fun1() {
    // Assign 5 to oopsGlobal Here
    // If u assign var to oopsGlobal then u can not use it outside this block of code
    // But since u didnt se var it is automatically a global varuable
    myGlobal
    oopsGlobal = 5;
    }

    // Only change code above this line

    function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
    }

    // Local Scope and Functions
    // Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

    // Here is a function myTest with a local variable called loc.

    function myTest() {
    const loc = "foo";
    console.log(loc);
    }

    myTest();
    console.log(loc);
    // The myTest() function call will display the string foo in the console. 
    // The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

    // Global vs. Local Scope in Functions
    // It is possible to have both local and global variables with the same name. When you do this, 
    // the local variable takes precedence over the global variable.

    const someVar = "Hat";

    function myFun() {
    const someVar = "Head";
    return someVar;
    }
    // The function myFun will return the string Head because the local version of the variable is present.
    // Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
    // Setup
    const outerWear = "T-Shirt";

    function myOutfit() {
    // Only change code below this line
    var outerWear = 'sweater'
    // Only change code above this line
    return outerWear;
    }

    myOutfit();
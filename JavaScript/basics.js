
/* Data Types */
/*
*   PRIMITIVES
*
*   String, Number, Boolean, Undefined, Null
*
*   NON-PRIMITIVE DATA TYPES
*
*   Function, Object, RegExp
*
* */

//variable assignment
var x = 5;

var y = 'string';

var z = {}; // <--- WAT?


/* Objects */

var obj = {
    propertyOne: 1,
    propertyTwo: "some string",
    propertyThree: 'some other string with single quotes',
    "propertyWithQuotes": 'why the quotes?' //hint: reserved,
    propertyThatIsAFunction: function() {
        console.log('wat')
    }
};

/* Functions */

var theThing = 7;

function doThatThingWithTheThing(theThing) {
    console.log(theThing * theThing);
}

function iCanHaz() {

    var x = 5;

    function noYouCanHazNot() {
        var y = 7; //QUESTION: How can we print this?

        console.log(x);
    }

    noYouCanHazNot();

    console.log(y);
}

function gimmeTheFunc(someFunc) {
    someFunc();
}

function datFunc() {
    console.log('da func');
}

gimmeTheFunc(datFunc);


/* Helpers for sanity checks */

alert('Test!');

debugger; //stops execution just like a breakpoint

var x = 5;
console.log(x); //5

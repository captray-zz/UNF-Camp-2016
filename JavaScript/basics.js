

            /*  Data Types

                PRIMITIVES

                -String
                -Number
                -Boolean
                -Undefined
                -Null

               NON-PRIMITIVE DATA TYPES

                -Function
                -Object
                -RegExp
            */



            /* Variable Assignment */

            var x = 5;

            var y = 'string';

            var z = {};

            var arr = [];

            var a = 1,
                b = 2,
                c = 3;


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


            //Functions are "first class" objects, meaning you can pass them as params
            function gimmeTheFunc(someFunc) {
                someFunc();
            }

            function datFunc() {
                console.log('da func');
            }

            gimmeTheFunc(datFunc);


            /* Objects */

            var obj = {
                propertyOne: 1,
                propertyTwo: "some string",
                propertyThree: 'some other string with single quotes',
                "propertyWithQuotes": 'why the quotes?', //hint: reserved
                propertyThatIsAFunction: function() {
                    console.log('wat')
                }
            };

            //so, this should make me a new obj, right?
            var foo = new obj();

            //this function returns the object you want
            function leObject(){
                return {
                    propertyOne: 1,
                    propertyTwo: "some string",
                    propertyThree: 'some other string with single quotes',
                    "propertyWithQuotes": 'why the quotes?', //hint: reserved
                    propertyThatIsAFunction: function() {
                        console.log('wat')
                    }
                }
            };

            var bar = new leObject();


            /* Arrays */

            var arr = [];
            var arr = new Array(); //new is optional
            var arr = new [];

            //but be careful... because JavaScript
            var arr = new Array(5);
            var arr = new Array(5, 10);

            var arr = [1,2,3];
            var arr = ['1',2,'3'];
            var arrWithObjects = [
                {
                    id: 1,
                    name: 'Bob'
                },
                {
                    id: 2,
                    name: 'Sue'
                }
            ];  //QUESTION: Do semicolons matter?


            /* Prototypes, Classes, and "Inheritance" */

            function Animal() {

                this.name;
                this.animalAction;

                this.logName = function() {
                    console.log(this.name);
                };

                this.doYourThing = function() {
                    console.log(this.animalAction);
                };
            }

            var animal = new Animal();
            animal.logName();

            function Cat(name) {
                Animal.call(this);
                this.name = name;
                this.animalAction = 'knock things over';
            }

            Cat.prototype = Object.create(Animal.prototype);

            function Dog(name) {
                Animal.call(this);
                this.name = name;
                this.animalAction = 'roll around in dirt';
            }

            Dog.prototype = Object.create(Animal.prototype);

            var cat = new Cat('Bojangles');
            cat.logName();
            cat.doYourThing();

            var dog = new Dog('Rex');
            dog.logName();
            dog.doYourThing();


            /* Helpers for sanity checks */

            alert('Test!');

            debugger; //stops execution just like a breakpoint

            var x = 5;
            console.log(x); //5

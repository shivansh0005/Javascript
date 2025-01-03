//Episode 1->1)Everything in js happens inside execution context.

2) Synchronous single threaded language.


//Episode 4(Hoisting)

getname();
console.log(x);
var x=7;
function getname(){
    console.log("shivansh");
}
-In the above mentioned code ,even before execution of the fist line javascript reserves memory for all the function and variables in the memory so when we try to console log them we get undefined for variable and funtion inside code for function.
This is known as Hoisting in javascript.

//Another imp thing is diffrence between Undefined and not defined->undefined means space is there in memory but does not have any value initialized to it where as not- defned means no space is initialized for it.
but if we use arrow function then it behaves just like another variable 

Episode-5(Functions inside javascript).

var x=1;
a();b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x)
}

-In this episode Akshay discussed about the execution context and global scope of function
x:undefined
then seprate global scope for a() which when completes will pop out and same will be done for b();
then global execution context will be done for x.


Episode 8->Let and Const are also hoisted in javascript but in diffrent memory space in which they cant be access before initializing them with values.

-This zone is known as temporary dead zone(Time between decleration and initialization).

-We will get refrence error in such zone.

-There is another type of error known as type error ->>assingment to a constant value gives type error

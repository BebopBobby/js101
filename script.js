//console.log("it works dammit!");
/*
var x = 11; // this creates variable named "x", and puts 11 inside of it; the variable is the box, and the 11 is what's inside the box
var y = 8;
console.log(x);

var name = "Bobby";

console.log(name); // this logs the variable "name" into the console, showing that it is holding the string "Bobby"

console.log(x % y); // this calculates the remainder between these two numbers; for example, 8 goes into 11 one time, with a reaminder of 3


var a = 10;
var b = 3;
var c = 2;
var answer = a - (b * c);
console.log("the answer is " + answer);
*/

//console.log(++x);

//one = is for storage, two == is for comparisons

/*
var longfuckinstring = `this is a super long string 
and i'm just gonna type whatever 
i want to blah blah blah`;
console.log(`this is fun - ${longfuckinstring}`);
*/

//Arrays start at index number 0

//ARRAY HOMEWORK-----------------------------------------------------------------------------------------------------------------------------------------------------------
/*
var deezNuts = ["glazed", "chocolate", "strawberry", "fuck"]; // i made an array called "deezNuts" containing different flavors of donuts
var name = deezNuts[3];
console.log(name); // i created a variable called name to log out a specific element in the array, in this case i logged out "fuck"

deezNuts[3] = "vanilla"; // I changed the value of the fourth element in deezNuts array from "fuck" to "vanilla"
var flavor = deezNuts[3];
console.log(flavor);

console.log(typeof deezNuts); // this shows that the array deezNuts is an object

console.log(deezNuts.length); // this shows that deezNuts has 4 elements

var last = deezNuts[deezNuts.length -1]; // this accesses the last element of deezNuts; since length does not start at zero, i had to take one away using "-1"
console.log(last);

deezNuts.push("sprinkles"); // i added a new element ("sprinkles") to the array using the push method
console.log(deezNuts[4]);
*/
//arrays use numbered indexes (numbers), while objects use named indexes (strings)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// var aaaa = ["a", "b", "c", "d", "e"];
// var eGone = aaaa.pop(); // takes element "e" off of the end of the array, but doesn't leave a hole; so if you check the length using .length, there will only be 4 elements in the array
// console.log(eGone);

// var eBack = aaaa.push("e"); // puts "e" back into the end of the array
// console.log(eBack); //

// var shiftA = aaaa.shift(); // takes "a" off of the beginning of the array
// console.log(shiftA);

// aaaa.unshift("a"); //puts "a" back at the beginning of the array
// console.log(aaaa);

// var spliceAdd = aaaa.splice(5, 0, "f", "g"); // this adds elements in at position 5, removes 0 elements, and then adds these two elements starting from position 5
// console.log(spliceAdd);
// console.log(aaaa);

// aaaa.splice(0, 4, "f", "s", "o"); // this starts at position 0, removes 4 elements, and adds these 3 new elements in position 0
// console.log(aaaa);

// aaaa.toString(); // turns the array "aaaa" into a string
// console.log(aaaa);

// function printSomeText(){
//     console.log("Rap God")
// }
// printsometext(); // invokes or calls the function printsometext

// function addTwoThings(numberOne, numberTwo){ // defines the parameters as "numberOne" and "numberTwo"
//     console.log(numberOne + numberTwo) // the code to be executed is to log the sum of numberOne and numberTwo into the console
// }
// addTwoThings(1, 98);

// function multiplyThreeThings(thingOne, thingTwo, thingThree){ // defines the parameters as "thingOne", "thingTwo", and "thingThree"
//     console.log(thingOne * thingTwo * thingThree); // code to be executed is thingOne multiplied by thingTwo multiplied by thingThree
// }
// multiplyThreeThings(0, 2, 3);

// var p = function(o, k) {return o * k}; // creates a function and puts it into a variable "p"
// var i = p(9, 2); // gives values to the parameters o and k
// console.log(i);

//create a function that takes in two parameters (price and discount percentage), fuction should tell you what the discount is
// function calculateDiscount(price, discountP){
//     return price * discountP / 100;
// }
// console.log(calculateDiscount(100,25));

// REMEMBER NOT TO PUT "FUNCTION" WHEN COPY-PASTING YOUR FUNCTION INTO CONSOLE.LOG();

// TEST TOPICS - VARIABLES, OPERATORS, ARITHMETIC, ASSIGNMENT, DATA TYPES, FUNCTIONS, ARRAYS, ARRAY METHODS

// var shouldIStudy = "yes"
// if (shouldIStudy == "yes") {
//     console.log("Learning Java will get me paid fool") // if shouldIStudy equals "yes", print "Learning Java will get me paid fool" to the console
// }else{
//     console.log("I want to push computers :P") // if shouldIStudy doesn't equal "yes", print this to the console
// }

// var dayOfTheWeek = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

// if(dayOfTheWeek [3] == "tues"){
    // console.log("Today is Thursday"); // This will print if the first statement is true
// }else if(dayOfTheWeek [3] == "thurs"){
    // console.log("Today is Definitely Thursday") // This will print if the first statement is false, but this statement is true
// }else{
//     console.log("Today is not 420") // This will print if no other statements are true
// }

// JAVA ASSESSMENT---------------------------------------------------------------------------------------------------------------------------------------------------
// Question 1:
// var w = 5
// var x = 9
// var y = 2
// var z = 3
// console.log(w * x + y - z);

// Question 2:
// var numArray = [8, 4, 9, 7, 2];
// console.log(numArray[1] * numArray[2]);

// Question 3:
// var x = 9
// var y = 2
// var dumb = [2, "racecar", x > y];
// console.log(dumb);
// dumb.pop
// dumb.splice(2, 1, "Bobby");
// console.log(dumb);

// Question 4:
// var grade = "pass"
// if (grade == "fail"){
//     console.log("The value of grade is not equal to fail");
// }else{
//     console.log("Looks like i passed");
// }

// Question 5:
// function finalPriceAfterDiscount(price, discount){
//     return price * discount / 100
// }
// console.log(finalPriceAfterDiscount(100, 10));
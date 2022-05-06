/*let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN !');
console.log(40 + 8 + 23 - 10);*/

/* ***Values & Variables*** */

console.log('Vselko');
console.log(23);

//let firstName = 'Vselko';
//console.log(firstName);

/*      *CONVENTIONS*
Camel case = first letter lower case, second letter upper case ex. firstName
illegal variable name = let 3years = 3 (unexpected token)
                      = let simon&bela = 'SB' (unexpected token &)
              instead = let simon_bela = 'SB'
NEW or FUNCTION is a reserved keyword of JS = instead: let $function
variables names only can contain numbers, letters, underscore or dollar sign
 Make sure that VARIABLE NAMES ARE DESCRIPTIVE : for ex.

let myFirstJob = 'Carpintero'
let myCurrentJob = 'Peon de flete'

let job1 = 'Carpintero'
let job2 = 'Peon de Flete' */

/* ***Data Types***

Objects & Primitives 
1) Numbers = floating point numbers; (let age = 41)
2) String = sequence of characters; (let firstName = 'Vselko')
3) Boolean = logical type can only be TRUE or FALSE; (let fullAge = true)
4) Undefined = variable not yet defined (empty value); (let children)
5) Null = also empty value;
6) Symbol = value unique and cannot be changed; 
7) BigInt = larger integers than Number type can hold;
** Dynamic typing = do not have to manually define the data type of a value stored in na variable. Data types are determined automatically. **
** VALUE HAS TYPE, NOT VARIABLE **
later in the code, can assign a new value with a diff data type to the same variable without a problem. Example: variable X can initially be a number and later be a string*/

/*let javaScriptIsFun = true;
console.log('javaScriptisFun');
console.log(typeof true);
console.log(typeof javaScriptisFun);
console.log(typeof 08);
console.log(typeof 'Vselko');

//reassign a variable
javascriptIsFun = 'Yes!'; //the first time a variable is declared we need to do it writing LET buy then, when we want to change de value, simply write it again writing the name without the LET
console.log(typeof javaScriptIsFun);

//Undefined & Null
//it is legal to declare a variable without a value
let year;
console.log(year);
console.log(typeof year);
//we can reassign a value
year = 1980;
console.log(year);

//LET, CONST & VAR
//we use LET keyword to declare variables that can change later
let age = 41;
age = 42; // the value "mutate"
//we use CONST keyword to declare variables that are not supose to changeat any point in the future
const birthYear = 1980; // we declare an inmutable variable
//birthYear = 1986;
//the VAR keyword is old, before EI6 - it works as LET keyword
var job = "male nurse";
job = "programmer";
//LET is block-scope and VAR is function-scope

// BASIC OPERATORS
//mathematics, comparison,logical, assignments, etc
// MATHS OPERATORS
const now = 2037
const ageDavid = now - 1980;
const ageSarah = now - 2018;
console.log(ageDavid, ageSarah);

//also can use different calculations in the same line

console.log(ageDavid * 2, ageDavid / 2, 2 ** 3);
//exponentiation operation 2 ** 3 (two to the power of three) (2 * 2 * 2)
//the PLUS operator can be use to concatenate diff strings
//const firstName = 'David';
//const lastName = 'Vselko';
//console.log(firstName + " " + lastName);

//the TYPEOF operator gives us the type of the value

// ASSIGNMENTS OPERATORS
// EQUAL SIGN OPERATOR 
let x = 10 + 5; // 15  (the equal sign here is actually itself an operator)
x += 10; // x = x + 10 = 25
x *= 4; // x = 25 (x) * 4 = 100
x++; // x = x + 1 = 101
x--;  // 100
x--; // 99 
console.log(x);

// COMPARISON OPERATORS (use to produce Boolean values)
console.log(ageDavid > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 2019); // essentially the same than doing "ageDavid > ageSarah" */

// STRINGS AND TEMPLATE LITERALS
const firstName = 'David';
const job = 'Student';
const birthYear = 1980;
const year = 2022;

const david = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + " " + job;
console.log(david);

const davidNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(davidNew);

console.log(`Just a regular string`);

console.log(`String with \n\
multiple
lines`);

console.log(`String with
multiple
lines since IE6`);

//IF - ELSE STATEMENTS
//example = Someone wants to know if it is old enough to get the drivers license. 
// const age = 19;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//         console.log('Sarah can start driving license');
// }

const age = 15;
if (age >= 18) {
        console.log('Sarah can start driving license');
} else {

}









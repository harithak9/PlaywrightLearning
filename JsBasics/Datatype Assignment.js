/*Datatype Assignments */

/*
1. Identify the datatype
Create variables for the following values and identify their datatype:*/

console.log("--------Number type------------");

let age=25;
console.log(age);//25
console.log("Age  is: "+age);//Number  is: 25
console.log("Age  is:",age);//Number is:  25
console.log(typeof age);//number

console.log("--------String type------------");

let lang="JavaScript";
console.log("Language is: "+lang);
console.log(typeof lang);//string


console.log("--------boolean type------------");

let isLoggedIn = true;
console.log("Is user logged in?: "+isLoggedIn);
console.log(typeof isLoggedIn);//boolean

console.log("--------Undefined------------");


let username;
console.log(username);//undefined
console.log(typeof username);//undefined

console.log("--------Null------------");

let Address=null;
console.log(Address);//null
console.log(typeof Address);//object


console.log("--------Decimal point------------");

let price = 123.45;

console.log(price); // 123.45 number
console.log(typeof price); // number

console.log("--------bigInt------------");

let bigNum = 12345678901234567890n;   
console.log(bigNum);   // 12345678901234567890n 
console.log(typeof bigNum); // bigint


console.log("--------Symbol------------");

let id1 = Symbol("id");
console.log(id1); // Symbol(id)
console.log(typeof id1); // symbol

/* Create Variables of Different Datatypes
Create one variable for each of the following datatypes: */

console.log("--------2. Variables of Different Datatypes------------");
                  

let fullName = "Haritha"; //string
console.log(fullName);
console.log(typeof fullName);

let marks = 95;   //number
console.log(marks);
console.log(typeof marks);

let isPassed = true; //boolean
console.log(isPassed);
console.log(typeof isPassed);

let middleName; //Undefined
console.log(middleName);
console.log(typeof middleName);

let phone = null; //null
console.log(phone);
console.log(typeof phone);

let population = 80078956432100000n; //bigInt
console.log(population);
console.log(typeof population);

let userId = Symbol("userId"); //symbol
console.log(userId);
console.log(typeof userId);

let student = {                           // Object
  name: "Haritha",
  course: "Playwright",
  isActive: true
};
console.log("Object    :", student);
console.log(typeof student);


/*  Predict the Output
Without running the code, predict the output: */

console.log(typeof 100); //number
console.log(typeof "100"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof 100n); //bigint


/*  Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.
*/


console.log("--------3. Student Information------------");

let studentName = "Haritha";   // String
let studentAge = 25;           // Number
let studentPercentage = 87.5;  // Number
let isCourseCompleted = true;  // Boolean
let studentGrade = "A";       // String

console.log("Student Name      :", studentName);
console.log(typeof studentName);
console.log("Student Age       :", studentAge);
console.log(typeof studentAge);
console.log("Percentage        :", studentPercentage);
console.log(typeof studentPercentage);
console.log("Course Completed? :", isCourseCompleted);
console.log(typeof isCourseCompleted);
console.log("Grade             :", studentGrade);
console.log(typeof studentGrade);


/* 5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?
*/

console.log("--------5. undefined vs null------------");

let userName;           // declared, but no value given yet
let userEmail = null;   // value set to "nothing"

console.log("userName  :", userName);
console.log(typeof userName);
console.log("userEmail :", userEmail);
console.log(typeof userEmail);

/* 
1. What is the difference between undefined and null?
undefined means No value has been given yet, JavaScript sets it automatically
Example	let userName; typeof ="undefined"

null Intentionally set to “no value”
the programmer set it on purpose
Example	let userEmail = null; typeof = "object"


2. What does typeof userName return?
It returns "undefined". The variable was declared without a value, so JavaScript gave it undefined automatically.

3. What does typeof userEmail return?
It returns "object", even though the value is null.

4. Why is typeof null considered unusual in JavaScript?
Because null is its own primitive datatype, not an object, but typeof reports it as object.

*/















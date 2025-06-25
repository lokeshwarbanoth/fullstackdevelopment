//operators in js
let a=10;
let b=20;
console.log("arithematic operators ")
console.log("sum:",a+b);
console.log("difference:",a-b);
console.log("product:",a*b);
console.log("quotient:",a/b);
console.log("Remainder:",a%b);
console.log("Exponent:",a**b);



//assignment operators
let x=10
x+=5;
x-=3;
x*=2;
x/=4;
x%=3;
console.log("Assignment operators ")
console.log("x after assignmens:",x);
console.log("\n");



//comparison operators
let c=10;
let d=20;
console.log("Arthmetic operators");
console.log("c=",c,", d=",d);
console.log("sum",c+d);
console.log("difference",c-d);
console.log("multiplaction",c*d);
console.log("division",c/d);
console.log("modulas",c%d);
console.log("emponent",c**d);




//Comparasion operators
console.log("Comparasion operators");
console.log("is:equal",a==b);
console.log("isstrictequal:",a===b);
console.log("isnotequal",a!=b);
console.log("isstrictnotequal",a!==b);
console.log("isgreater",a>b);
console.log("islessthan",a<b);
console.log("isgreaterthanequal",a>=b);
console.log("islesstahnequal",a<=b);




//4. Logical operators
let andOperator = (a > 0 && b > 0);
let orOperator = (a > 0 || b < 0);
let notOperator = (!a < b);
console.log("logical operators:");
console.log("And Operator:", andOperator);
console.log("Or Operator:", orOperator);
console.log("NotOperator:",notOperator);
console.log("\n");



//5.BitwiseOperators
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftShift = a<< 1;
let rightShift = a>>1;
console.log("Bitwise Operators");
console.log("Bitwise And:",bitwiseAnd);
console.log("Bitwise And:",bitwiseOr);
console.log("Bitwise And:",bitwiseXor);
console.log("Bitwise And:",bitwiseNot);
console.log("Bitwise And:",leftShift);
console.log("Left Shift:",rightShift);
console.log("\n")

//Ternary operators
let age = 21;
let eligibility = (age >= 18) ? "Eligibility to vote" : "Not eligible to vote";
console.log("Ternary Operator:");
console.log("Eligibility:",eligibility);
console.log("\n");


//Type of Operator
let variableType = typeof a;
console.log("Typeof Operator:");
console.log("Type of variable 'a':",variableType);
console.log("\n");
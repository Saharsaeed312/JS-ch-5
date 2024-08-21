// cchapter:no:05
// question:no:1
var num1 = 3;
var num2 = 5;
 document.write(`Sum of 3 and 5 is ${num1 + num2}</br>`);
 console.log(`Sum of 3 and 5 is ${num1 + num2}</br>`);
//  question:no:2
// substraction
var num1 = 3;
var num2 = 5;
 document.write(`Subtraction of 3 and 5 is ${num1 - num2}</br>`);
 console.log(`Subtraction of 3 and 5 is ${num1 - num2}</br>`);
// multiplication
var num1 = 3;
var num2 = 5;
 document.write(`Multiplication of 3 and 5 is ${num1 * num2}</br>`);
 console.log(`Multiplication of 3 and 5 is ${num1 * num2}</br>`);
//  division
var num1 = 3;
var num2 = 5;
 document.write(`division of 3 and 5 is ${num1 / num2}</br>`);
 console.log(`division of 3 and 5 is ${num1 / num2}</br>`);
//  Mudulus
var num1 = 3;
var num2 = 5;
 document.write(`Mudulus of 3 and 5 is ${num1 % num2}</br>`);
 console.log(`Mudulus of 3 and 5 is ${num1 % num2}</br>`);
//  question:no:3
// a. 
 var value;

//  b. 
 document.write(`Value after variable declaration is: ${value}<br>`);

// c. 
value = 5;

// d. 
 document.write(`Initial value: ${value}<br>`);

// e. 
 value++;

// f. 
document.write(`Value after increment is: ${value }<br>`);

// g. 
value += 7;

// h. 
 document.write(`Value after addition is: ${value}<br>`);

// i. 
value--;

// j. 
document.write(`Value after decrement is: ${value}<br>`);

// k. 
 var remainder = value % 3;

// l. 
 document.write(`The remainder is: ${remainder}<br>`);
//  question:no:4
var oneTicketCost = 600;
var noOfTicket = 5;
document.write(`Toatl cost to buy 5 ticket to a movie is ${oneTicketCost*noOfTicket}PKR`)
// question:no:5
 var table = prompt("Write a number to print table.");
 document.write(`Table of ${table}<br>`);
document.write(`${table} x 1 = ${table*1}<br>`);
 document.write(`${table} x 2 = ${table*2}<br>`);
 document.write(`${table} x 3 = ${table*3}<br>`);
 document.write(`${table} x 4 = ${table*4}<br>`);
 document.write(`${table} x 5 = ${table*5}<br>`);
 document.write(`${table} x 6 = ${table*6}<br>`);
 document.write(`${table} x 7 = ${table*7}<br>`);
 document.write(`${table} x 8 = ${table*8}<br>`);
 document.write(`${table} x 9 = ${table*9}<br>`);
 document.write(`${table} x 10 = ${table*10}<br>`);
//  question:no:6
// a.
var celsiusTemp =25;
// b.
document.write(`${celsiusTemp}C is ${(celsiusTemp*9/5)+32}F  <br>`);
// c.
var fernihantTemp = 70;
// d.
document.write(`${fernihantTemp}C is ${(fernihantTemp*5/9)-32}F  <br>`);
// question:no:7
// a.
var priceOfItem1 = 650;
// b.
var priceofItem2 = 100;
// c.
var quantity1 = 3;
// d.
var quantity2 = 7;
// e.
var shippingCharges = 100;
// f.
var totalCost =(priceOfItem1*quantity1)+(priceofItem2*quantity2)+shippingCharges
// g.
document.write('<h1>Shopping cart</h1><br>');
document.write(`Price of item 1 is ${priceOfItem1}<br/>`)
document.write(`Price of item 2 is ${priceofItem2}<br/>`)
document.write(`Quantity of item 1 is ${quantity1}<br/>`)
document.write(`Quantity of item 2 is ${quantity2}<br/>`)
document.write(`Shipping Charges ${shippingCharges}<br/>`)
document.write(`Total cost of your order is ${totalCost}<br/>`)
// question:no:8
// a.
var totalMarks = 980;
// b.
var obtainedMarks = 804;
// c.
var percentage = (obtainedMarks/totalMarks)*100
 console.log(percentage);

// d.
 document.write(`<h1>Marks Sheet</h1> <br>`);
 document.write(`Total marks: ${totalMarks} <br>`);
 document.write(`Marks obtained: ${obtainedMarks} <br>`);
 document.write(`Percentage ${percentage}% <br>`);
//  question:no:9:
//a.
 var usdToPkr = 104.80;  // 1 US Dollar = 104.80 Pakistani Rupee
 var suadiriyalToPkr = 28; // 1 Saudi Riyal = 28 Pakistani Rupee

//b.
 var usdAmount = 10; // 10 US dollars
 var saudiriyalsAmount = 25; // 25 Saudi Riyals

//c.
 var totalPkrAmount = (usdAmount * usdToPkr) + (saudiriyalsAmount * suadiriyalToPkr);
 console.log(totalPkrAmount);

//d.
 document.write(`<h1>Currency in PKR</h1> <br>`);
 document.write(`Total Currency in PKR: ${totalPkrAmount}`);
// question:no:10:
// a.
 var number = 10;

// b.
var total = ((number + 5) * 10) / 2;
 console.log(total);
//question:no:11:
// a.
var currentYear = 2024;
// b.
var birthyear = 2006;
// c.
var age1 = currentYear-birthyear;
var age2 = age1-1;
// d.
console.log(age2);
// e.
var currentYear = prompt(`Current Year`);
// f.
 var birthYear = prompt(`Your Birth Year`);
//  g.
 document.write(`<h1>Age Calculator</h1> <br>`);
 document.write(`Current Year: ${currentYear}<br>`);
 document.write(`Birth Year: ${birthYear}<br>`);
 document.write(`Your Age is: ${age1} and ${age2}`);
// question:nono:12:
// a.
var radius= 20;
//b.
var pie = 3.142
// c.
var total = pie* radius*radius;
// d.
 document.write(`<h1>The Geometrizer</h1> <br>`);
 document.write(`Radius of a circle is: ${radius}<br>`);
 document.write(`Circumference of a circle is: ${pie}<br>`);
 document.write(`Area of a circle is: ${total}`);
//  question:no:13:
// a.
 var favSnack = "Chocolate";
// b.
 var currentAge = 17;

// c.
var maxAge = 65;
// d.
 var amountSnacksPerDay = 3;
// e.
 var yearsRemain = maxAge - currentAge;
 var total = yearsRemain * amountSnacksPerDay;
// f.
 document.write(`<h1>The Lifetime Supply Calculator</h1> <br>`);
 document.write(`Favourite Snack: ${favSnack}<br>`);
 document.write(`Current age: ${currentAge}<br>`);
 document.write(`Estimated Maximum Age: ${maxAge}<br>`);
 document.write(`Amount of snacks per day: ${amountSnacksPerDay}<br>`);
 document.write(`You will need ${total} ${favSnack} to last you until the ripe old age of ${maxAge}<br>`);
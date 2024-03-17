// #################  USER INPUT & CONDITIONAL STATEMENTS  #################

// Q1
// var abc = prompt("Enter name")
// alert("Hi, " + abc + " !")

// Q2
// var enterNumber = +prompt("Enter number for multiply", 5 )
// for(var i = 1; i <= 10; i++){
//     document.write(enterNumber + " x " + i + " = " + enterNumber*i + "<br>")
// }

// Q3
// var city = prompt("Enter city name")
// if (city == "karachi" || city == "Karachi") {alert("Welcome to city of lights!")
// }

// Q4
// var gender = prompt("Enter your Gender")
//  if (gender == "male" || gender == "Male") { alert("Good Morning Sir") }
//  else if (gender == "female" || gender == "Female") { alert("Good Morning Ma’am") }

// Q5
// var signalColour = prompt("Enter signal colour")
// if (signalColour == "red" || signalColour == "Red") { document.write("vehicles must stop") }
// else if ( signalColour == "yellow" || signalColour == "Yellow") { document.write("vehicles should get ready to move")}
// else if ( signalColour == "green" || signalColour == "Green") {document.write("vehicles can move now")}

// Q6
// var maxAge = +prompt("Enter max age");
// var age = +prompt("Enter your current age");
// if (age <= maxAge) {
//   alert("You are welcome");
// }

// Q7
// var remainingFuel = prompt("Enter your remaining fuel", "liters")
// if (remainingFuel < "0.25liters") (alert("Please refill the fuel in your car"))

// Q8
// a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }      (DISPLAYED)

// b.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }    (NOT DISPLAYED)

// c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");   (NOT DISPLAYED)
// }
// if (c === 13){
// alert("condition 2 is true");   (DISPLAYED)
// }
// if (++c < 14){
// alert("condition 3 is true");   (NOT DISPLAYED)
// }
// if(c === 14){
// alert("condition 4 is true");    (DISPLAYED)
// }

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }     (DISPLAYED)

// e.
// if (true){
//     alert("True");       (DISPLAYED)
//     }
//     if (false){
//     alert("False");
//     }

// f.
// if ("car" < "cat") {
//   alert("car is smaller than cat");    (DISPLAYED)
// }

// Q9

// var englishMarks = +prompt("English marks");
// var urduMarks = +prompt("Urdu marks");
// var mathsMarks = +prompt("Maths marks");
// var totalObtained = englishMarks + urduMarks + mathsMarks;
// var total = 300;
// var grade;
// var perc = (totalObtained / total) * 100;
// var remarks;

// if (perc >= 80) {
//   grade = "A+", remarks = "Excellent"
// } else if (perc >= 70) {
//   grade = "A", remarks = "Good"
// } else if (perc >= 60) {
//   grade = "B", remarks = "You need to improve"
// } else if (perc < 60) {
//   grade = "fail", remarks = "Sorry"
// }

// document.write(
//   `<h1>Mark Sheet </h1> <br> <br> Total Marks: ${total} <br> Marks Obtained: ${totalObtained} <br> Percentage: ${perc.toFixed(2)} % <br> Grade: ${grade} <br> Remarks: ${remarks} `);

// Q10
// var nameItem1 = prompt("Enter item 1 name");
// var nameItem2 = prompt("Enter item 2 name");
// var priceItem1 = +prompt("Enter item 1 price");
// var priceItem2 = +prompt("Enter item 2 price");
// var qtyItem1 = +prompt("Enter item 1 qty");
// var qtyItem2 = +prompt("Enter item 2 qty");
// var shipCharge = 250;
// var total = priceItem1 * qtyItem1 + priceItem2 * qtyItem2 + shipCharge;
// var disc;

// if (total > 2000) {
//   disc = total - (total * 10) / 100;
// }else{disc = 0}

// document.write(`<h1>Shopping Cart</h1> <br> Price of ${nameItem1} is ${priceItem1}<br>
// Quantity of ${nameItem1} is ${qtyItem1}<br>
// Price of ${nameItem2} is ${priceItem2}<br>
// Quantity of ${nameItem2} is ${qtyItem2}<br> <br>
// Shipping Charges ${shipCharge} <br><br>
// Total cost of your order is ${total} PKR<br>
// Discounted Price is ${disc} PKR (10% discount on above 2000PKR)`);

// Q11
// var secretNumber = 5;
// var user = +prompt("Enter Correct Number");
// if (user == secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (user === ++secretNumber) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Oops. Wrong Number");
// }

// Q12
// var num = +prompt("Enter number");

// if (num % 3 == 0) {
//   alert(num + " is divisible by 3");
// }

// Q13
// var teamA = "Tigers";
// var teamB = "Kings";
// var teamAScore = +prompt("Enter team A, " + teamA + " score");
// var teamBScore = +prompt("Enter team B, " + teamB + " score");

// if (teamAScore > teamBScore) {
//   alert(teamA + " have won the match");
// } else if (teamAScore < teamBScore) {
//   alert(teamB + " have won the match");
// } else if (teamAScore == teamBScore) {
//   alert("Match Draw");
// }

// Q14

// var string = "pakistan"
// var boolean = true
// var integers = 92

// alert(string+" is a "+ typeof(string))
// alert(boolean+" is a "+ typeof(boolean))
// alert(integers+" is a "+ typeof(integers))

// Q15
// var num = +prompt("Enter number to check");

// if (num % 2 == 0) {
//   alert("Even");
// } else {alert("Odd")}

// Q16
// var T = +prompt("Enter Karachi weather degrees");
// if (T > 40) {
//   alert("“It is too hot outside.”");
// } else if (T > 30) {
//   alert("“The Weather today is Normal.”");
// } else if (T > 20) {
//   alert("“Today’s Weather is cool.”");
// } else if (T > 10) {
// alert("“OMG! Today’s weather is so Cool.”")}

// Q17
// var firstNumber = +prompt("Enter first num");
// var secondNumber = +prompt("Enter second num");
// var operation = prompt("Enter calculation type * or / or - or + or %");
// var ans;
// if(operation == "+"){ans = firstNumber + secondNumber }
// else if (operation == "-"){ans = firstNumber - secondNumber}
// else if (operation == "*"){ans = firstNumber * secondNumber}
// else if (operation == "%"){ans = firstNumber % secondNumber}
// else if (operation == "/"){ans = firstNumber / secondNumber}

// alert(` ${firstNumber} ${operation} ${secondNumber}  is   ${ans}`)

// Q18
// var dayName = prompt("Enter day name", "monday");
// if (
//   dayName == "monday" ||
//   dayName == "tuesday" ||
//   dayName == "wednesday" ||
//   dayName == "thursday" ||
//   dayName == "friday"
// ) {
//   alert("“It’s a week day”.");
// }else if (dayName == "saturday"){alert("“It’s weekend”.")}
//     else if (dayName == "sunday"){alert("“Yay! It’s a holiday”.")}

// Q19
// var score = +prompt("Enter your score")
// if(score > 50){alert("“You are passed”.")}
// else{alert("Try again!")}

// Q20
// var num1 = +prompt("Enter first num");
// var num2 = +prompt("Enter second num");
// var ans = Math.max(num1,num2)
// if (num1 > num2) {
//   alert("The Greater number of "+ num1 + " and " + num2 + " is "+ ans );
// } else if (num1 < num2) {alert("The Greater number of "+ num1 + " and " + num2 + " is " + ans)
// } else if (num1 == num2) { alert("Both are equal")
// }

// Math.max(value1 , value2)  it shows which one is greater value1 or value2 !!

// Q22
// var num = +prompt("Enter num")
// if(num >= 0){alert("Positive")}
// else if (num < 0){alert("Negative")}

// Q23
// var num = +prompt("Enter a number")
// var noun = prompt("Enter a noun")
// if(num > 1){alert(num+ " "+ noun + "s") }
// else if(num == 1){alert(num+ " "+ noun) }

// ############# IF...ELSE & ELSE IF STATEMENTS,TESTING SET OF CONDITIONS & SWITCH STATEMENTS #############

// Q1

// var num = +prompt("Enter number");

// if (num % 3 == 0) {
//   alert(num + " is divisible by 3");
// }
// else {alert( num + " is not divisible by 3")}

// Q2
// var num = +prompt("Enter number to check");

// if (num % 2 == 0) {
//   alert("Even");
// } else {alert("Odd")}

// Q3
// var age = +prompt("Enter your age");
// if (age > 18) {
//   alert("Old enough");
// } else {
//   alert("Too young");
// }

// Q4
// var user = prompt("Enter name");
// if (user == "salman") {
//   alert("wow, our names are same");
// }

// Q5
// var num = +prompt("Enter num");

// switch (true) {
//   case num % 3 == 0:
//     document.write(num +" is divisible by 3");
//     break;
//   case num % 3 != 0:
//     document.write(num + " is not divisible by 3")
//     break;

// }

// Q6
// var user = prompt("Enter a character:");

// if (user >= '0' && user <= '9999') {
//     alert("The user is a number.");
// } else if (user >= 'A' && user <= 'Z') {
//     alert("The user is an uppercase letter.");
// } else if (user >= 'a' && user <= 'z') {
//     alert("The user is a lowercase letter.");
// } else {
//     alert("The user is not a Number or Uppercase or Lowercase letter.");
// }

// Q7
// var num1 = +prompt("Enter num 1")
// var num2 = +prompt("Enter num 2")
// var operator = prompt("Enter + or - or * or / or %")
// var ans;

// switch (operator){
//     case "+":
//         ans = num1 + num2
//         document.write(`${num1} + ${num2} = ${ans}`)
//         break;

//         case "-":
//             ans = num1 - num2
//             document.write(`${num1} - ${num2} = ${ans}`)
//             break;

//             case "*":
//                 ans = num1 * num2
//                 document.write(`${num1} * ${num2} = ${ans}`)
//                 break;

//                 case "/":
//                     ans = num1 / num2
//                     document.write(`${num1} / ${num2} = ${ans}`)
//                     break;

//                     case "%":
//                         ans = num1 % num2
//                         document.write(`${num1} % ${num2} = ${ans}`)
//                         break;
// }
//

// Q8
// var time = +prompt("Enter time");

// if (time >= 0 && time < 1200) {
//   alert("Good Morning");
// } else if (time <= 1200 && time < 1700) {
//   alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening");
// } else if (time >= 2100 && time <= 2359) {alert("Good Night")}

// Q10

// var JS = "password123";
// var user = prompt("Enter your Password");

// if (user == ""){alert("Please enter your password")}
// else if (user == JS){alert("Correct! The password you entered matches the original password")}
// else {alert("Incorrect password")}

// 11
// var firstName = prompt("Enter your name");

// if (firstName === "fahad") {
//   document.write("Hello Fahad!");
// } else {
//   document.write("You are not Fahad");
// }

// Q12
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }

// Q13
// var num1 = +prompt("Enter first num");
// var num2 = +prompt("Enter second num");
// var ans = Math.max(num1,num2)

// if (num1 > num2) {
//   alert(`In ${num1} and ${num2} the Greater number is ${ans} ` );
// }  if (num1 < num2) {
//     alert(`In ${num1} and ${num2} the Greater number is ${ans} ` );
// } else if (num1 == num2) { alert("Both are equal")
// }

// Q14
// var user = +prompt("Enter a number to check")
// if(user > 0){alert(user + " is Positive")}
// else if(user == 0) {alert("Number is Zero")}
// else if (user < 0) {alert(user + " is Negative")}

// Q15
// var inputTime = prompt("Enter time in hours (am or pm)", "5pm");
// if (inputTime >= "6am" && inputTime <= "9am") {
//   alert("Breakfast is served");
// } else if (inputTime >= "11am" && inputTime <= "1pm") {
//   alert("Time for lunch");
// } else if (inputTime >= "5pm" && inputTime <= "8pm") {
//   alert("It's dinner time");
// }
// else {alert("Sorry, you'll have to wait, or go get a snack")}

// Q16
// var input = "salman"

// if (typeof input === "number") {
//   alert(input + " is number");
// } else if (typeof input === "string") {
//   alert(input + " is string");
// } else if (typeof input === "boolean") {
//   alert(input + " is boolean");
// } else if(input === "undefined") {alert(input + " is undefined")}
// else{alert("I'ts something else")}

// Q17
// var input = prompt("Enter alphabet");
// if ((input == "a", "A", "e", "E", "i", "I", "o", "O", "u", "U")) {
//   alert("True");
// } else if(input != "a", "A", "e", "E", "i", "I", "o", "O", "u", "U") {
//   alert("False");
// }                                   !! X X X X !!

// Q18
// var input = 10
// if (input != 8){alert("true")}

// Q19
// var month = +prompt("Enter month number")
// switch (true) {
//     case month == 1:
//         alert("Jan")
//         break;
//         case month == 2:
//             alert("Feb")
//             break;
//             case month == 3:
//                 alert("Mar")
//                 break;
//                 case month == 4:
//                     alert("Apr")
//                     break;
//                     case month == 5:
//                         alert("May")
//                         break;
//                         case month == 6:
//                             alert("Jun")
//                             break;
//                             case month == 7:
//                                 alert("Jul")
//                                 break;
//                                 case month == 9:
//                                     alert("Sep")
//                                     break;
//                                     case month == 10:
//                                         alert("Oct")
//                                         break;
//                                         case month == 11:
//                                             alert("Nov")
//                                             break;
//                                             case month == 12:
//                                                 alert("Dec")
//                                                 break;

//                     default:
//                         alert("Enter valid month num")
//         break;
// }

// Q20
// conditional (ternary) operator

// var age = +prompt("Enter age");
// var voteable = age < 18 ? "Too young" : "Old enough";
// alert(voteable);

// ################## ARRAYS #################

// Q1
// JS literal notation
// var studentName = []

// Q2
// JS object notation
// var arr = new Array()

// Q3
// var arr = ["html","css","javascript","web"]

// Q4
// var arr = [1,2,3,4,5]

// Q5
// var arr = [true,false]

// Q6
// var arr = ["salman",2,true]

// Q7
// var sim = ["zong","ufone","telenor","jazz"]

// Q8
// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// for (var i = 1; i < education.length; i++) {
//   document.write(i + ") " + education[i] + "<br>");
// }

// Q9
// var movies = [];
// movies.push("Avengers");
// movies.push("Spectre");
// movies.push("Jurassic");
// movies.push("Inside");

// document.write("<h1> Top Movies of 2015</h1>");

// for (var i = 0; i < movies.length; i++) {
//   document.write(i + " )" + movies[i] + "<br>");
// }

// document.write(`<h1> Length of th array is ${movies.length} </h1>`);

// Q10
// var favCars = ["Audi", "Volvo", "Ford", "Lamborghini"];

// document.write(`<h1> Favourite Cars </h1> <br> ${favCars} <br> <br>
// First index of Array is: ${favCars.indexOf("Audi")} <br>
// Car at first index of Array is: ${favCars[0]} <br>
// Last index of Array is: ${favCars.indexOf("Lamborghini")} <br>
// Car at last index of Array is: ${favCars[3]} `);

// Q11

// var names = ["Micheal", "John", "Tony"];
// var scores = [320, 230, 480];
// total = 500;

// document.write(
//   `Score of ${names[0]} is ${scores[0]}. Percentage: ${
//     (scores[0] / total) * 100
//   }% <br>
//   Score of ${names[1]} is ${scores[1]}. Percentage: ${
//     (scores[1] / total) * 100
//   }%<br>
//   Score of ${names[2]} is ${scores[2]}. Percentage: ${
//     (scores[2] / total) * 100
//   }%<br>`
// );

//Q12
//a)
// var colours = ["red", "yellow", "green"];
// document.write(`<b>Orignal Array: </b> ${colours} <br> <br>`);
// colours.unshift(prompt("Add colour in begining "));
// document.write("<b>Added in benining: </b>" + colours + "<br>" + "<br>");

// //b)

// colours.push(prompt("Add colour in the end "));
// document.write("<b>Added in the end: </b>" + colours + "<br>" + "<br>");

// //c)
// colours.unshift("purple", "orange");
// document.write("<b>Added 2 in begining: </b>" + colours + "<br>" + "<br>");

// //d)
// colours.shift();
// document.write("<b>deleted 1 from begining: </b>" + colours + "<br>" + "<br>");

// //e)
// colours.pop();
// document.write("<b>deleted 1 from end: </b>" + colours + "<br>" + "<br>");

// //f)
// var addIndex = prompt("Enter (index) from where you want to add");
// var addColour = prompt("Enter to colur you want to add");

// var added = colours.splice(addIndex, 0, addColour);
// document.write(
//   "<b>Add (from where) (which colour): </b>" + colours + "<br>" + "<br>"
// );

// //g)
// var delFromWhere = prompt("Enter (index) from where you want to delet");
// var delHowMany = prompt("Enter (number) how many you want to dlete");

// var added = colours.splice(delFromWhere, delHowMany);
// document.write(
//   "<b>Delete (From where) (How many): </b>" + colours + "<br>" + "<br>"
// );

//Q13
// var score = [320, 230, 480, 120];
// document.write(`<b>Score of Students:</b> ${score} <br><br>`);
// score.sort();
// document.write(`<b>Ordered Score of Students:</b> ${score}`);

//Q14
// var fruits = ["strawberry", "apple", "orange", "banana"];
// document.write(`<b>Fruits list:</b> ${fruits} <br><br>`);
// fruits.sort()
// document.write(`<b>Ordered Fruits list:</b> ${fruits} <br><br>`);

//Q15
// var cities = ["Karachi", "Lahore", "Islambad", "Quetta", "Peshawar"];
// document.write(`<b>Cities list:</b> ${cities} <br><br>`);
// var selectedCities = cities.slice(1, 4);
// document.write(`<b>Selected Cities list:</b> ${selectedCities} `);

//Q16
// var arr = ["This", "is", "my", "cat"];
// document.write(`<b>Array:</b> ${arr} <br><br>`);

// document.write(`<b>String:</b> ${arr.join(" ")} `);

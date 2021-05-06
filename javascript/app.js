// comments are notes about the code you can create them by doing ctrl+/ or /* mulitble line of comments */

// one line of comments

/*
mulitble lines of comments
*/


/*
Datatypes:

String: Text in javascript 'text'or "text"

Number:all numbers types in JS 5 5.5 

Boolean:only has two values
true or false

*/

"samer"
'samer'

5 + 5

true
false

// Variables: its something to store values, the names for variables should always be mwaningful

// var userName ='samer'; 
// alert(2+'2');

// alert('hello');
// alert(userName);

// alert('hello '+userName);

/*
Operators:sympol that does an action

assignments operater
= equal

var x = 5;

x+=7
x=x+7

x-=7
x=x-7

arithmatic Operators
math 
+ plus x=5+5
- minus x=10-7
* multiply
/ devide
% modules
** powerof 2**3

*/


// concatination: connecting two strings together
// var firstName='samer';
// var lastName='allaham';

// var fullName=firstName+lastName;

// alert(fullName);

// console.log(fullName);
// console.log('hello from javascript');

// document.write('<h3>'+fullName+'</h3>');


// varsamerer
// var age
// age
// var age ='';
// console.log(age);
/*
comparison operator:used in conditional statements

true or false
== compare the value
=== compare the values and the Datatypes
!= not equal the value only
!== not equal the value and datatype
< smaller than
> bigger than
>= bigger than or equal
<= smaller than or equal
*/

// console.log(5=='5');

// console.log(5==='5');

// console.log(5+'5');
// console.log(5!='5');

// console.log(5!=='5');


// conditional statements
/*
if(condition){
  if the condition is true run this code...
}else{
  do this code..
}

if(condition one){
  if the condition one is true run this code...

}else if(condition two){
  if the condition two is true run this code...
}else{
  do this code..
}


*/

// var test=true
// if(test===true){

//   console.log('hello');
//   document.write('<h2 style="text-align:center;">'+test+'</h2>');
//   document.write('<a href="https://www.google.com/">google</a>');
// }


// var fasting = true;


// if(fasting ==true){
//   console.log('im kind of thirsty');
// }else if(fasting == false){
// console.log('not thirsty and not hungrey');
// }else{
//   console.log('it\'s a normal day' );
// }

// var number=0;

// if(number>4){
// console.log('the number is bigger than 4');
// }else{
//   console.log('the number is NOT bigger than 4');
// }


// var age=prompt('whats your age?');

// console.log(age);


// var favouriteMovie=prompt('what do you like more harry potter or lord of the rings?');

// there is a way to change to lower case.


// if(favouriteMovie=='harry potter'){
//   document.write('<img src="https://i2.wp.com/www.piratesandprincesses.net/wp-content/uploads/2021/01/harry-potter.jpg?fit=1000%2C600&ssl=1" width="250px">');
// }else if(favouriteMovie === 'lord of the rings'){
//   document.write('<img src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg" width="250px">');
// }else{
//   document.write('<h3> please only write harry potter or lord of the rings next time</h3>');
// }


// var age=prompt('whats your age?');

// if(age == 30){
//   console.log('you are 30')
// }


// var age;



//####################CLASS 5######################

/*
Logical operators 
-AND &&: the conditon only true when BOTH of them are true

-OR ||: The condition is only false when BOTH are false


Loops: a way to repeat code for an amount of time without copying and pasting the same code


*/

// console.log(true||false);

/* for loop: when you want repeat the code for a LIMITED amount of times until is false

 for(initialization; condition; update){
     is the code that will keep running as long as the condition is true
 }

*/
// i=i+1
// var test=0;
// for (var i = 0; i < 5; i++) {

  // code..
  // i=0
  // i=1
  // i=2
  // i=3
  // i=4
  // test+=5
  // console.log('hi',test);
// }

// console.log('hello after for');

/*
While loop: when you want to repeat the code for an unlimeted amount of times  until the condition is false.

while(contion){
  while the condition is true keep running the code, if it's false it will break the loop
}



*/


// var i=0;

// while(i<5){
//   console.log('hello');
//   i++
// }



/*
1- ask the user whats your favourite movie
2-keep asking until he only answers with harry potter or lord of the rings
3-ask how many starts do you give our website 
4-show number of starts based on user input.


*/

var favouriteMovie = prompt('what do you like more harry potter or lord of the rings?');

while (favouriteMovie !== 'harry potter' && favouriteMovie !== 'lord of the rings') {
  favouriteMovie = prompt('please only answer with harry potter or lord of the rings');
}




if (favouriteMovie == 'harry potter') {
  document.write('<img src="https://i2.wp.com/www.piratesandprincesses.net/wp-content/uploads/2021/01/harry-potter.jpg?fit=1000%2C600&ssl=1" width="250px">');
} else if (favouriteMovie === 'lord of the rings') {
  document.write('<img src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg" width="250px">');
} else {
  document.write('<h3> please only write harry potter or lord of the rings next time</h3>');
}


var stars = prompt('how many starts do you rate our website?');

if (stars > 5) {
  stars = 5;
}

for (var i = 0; i < stars; i++) {

  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">');
}


// for(var i = 0; i < 10; i++){
//    console.log(i);
//    if(i==3){
  // it will stop the loop when it reaches 3
     
//      break;
//    }
// }

// var example=confirm('are you ok?')

// console.log(example);
// if()


// for(var i=0; i<5; i++){
//   console.log('from first loop',i);
//   for(var j=0;j<10;j++){
//     console.log('from second loop ',j);
//   }
// }

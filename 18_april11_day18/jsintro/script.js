//sending messages to the developers console
//console.log('I received a click!') //included a string in quotation marks

//what is a variable?
//a place to store data: string, integers (whole numebrs) & floats(decimal), boolean(true/false)
//string: uses quotation marks to literally mark a string

//defining variables

//ES6 uses let and const to define variables
var firstName = 'Sarah '
var lastName = 'Dahnke'
var space = ' '

//console.log(firstName[5]); //strings are also arrays that can be indexed

//concatinating variables
//console.log(firstName + ' ' + lastName); //option 1 for creating a space
//console.log(firstName, lastName)//option 2
//console.log(firstName + space + lastName)//option 3
//console.log(firstName + lastName)

//storing integers
var num1 = '5'

//storing floats
var num2 = 5.4
var num3 = 4

//console.log(num1 + num2 + num3);
//55.44-concatination if we don't use parenthesis
//59.4-math if parenthesis are added to num2 + num3

//math
//addition + 
//subtraction -
//multiply *
//divide /

//creating arrays
//what is an array? an array is a LIST

var firstArray = ['bert', 'ernie', 'big bird', 'snuffie']
var secondArray = ['kermit', 'miss piggy', 'gonzo', 'swedish chef']
//multidimensional array
var thirdArray = [firstArray, secondArray]

//console.log(firstArray);//console log of the full array
//console.log(secondArray);

//console.log(firstArray[2])

//console.log(thirdArray[1][2]);
//gonzo
//big bird

//set up control flow with if/else statements
//< or >
//<= or >=

//var num = 15
//
////js accepts equality as == or ===. When you use === you are ensureing TRUE equality.
//if (num === 15){
//    console.log('you have the correct number!')
//}else if (num > 15){
//    console.log('your number is too big')
//}else{
//    console.log('please choose another number')
//}

var num = 15

//js accepts equality as == or ===. When you use === you are ensureing TRUE equality.
//if (num === 15){
//    alert('you have the correct number!')
//}else if (num > 15){
//    alert('your number is too big')
//}else{
//    alert('please choose another number')
//}

//writing functions

//to make a procedure, set of instructions that make things easier
//compartamentalize 
//setting up a small machine that performs a simple procedure

//setting it up
function sayHello(){
    console.log('hellooooooooo')
}

//calling the function
//sayHello()

//setting up a function with arguments
function addNumber(numberOne, numberTwo){
    return numberOne + numberTwo //return exits the function
}

//calling the addNumber function
//console.log(addNumber(40,60));

//create a function that acts like a virtual door
//if we call door #1, we will return tacos
//if we call door #2, we will return pizza
//if we call door #3, we will get bagels

//function that contains an if/else statement

//test each of your doors by calling the function at least 3 times

function door(num){
  if (num === 1){
    return 'Tacos'
  }
  else if (num === 2){
    return 'Pizza'
  }
  else if (num === 3){
    return 'Bagels'
  }
    else {
        return 'there are only 3 doors!'
    }
}
//console.log(door(1));
//console.log(door(2));
//console.log(door(3));
console.log(door(5));


































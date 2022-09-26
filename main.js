//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr){
    for(let i = 0; i < arr.length; i++){
        if(str.includes(dog_names[i])){
            console.log(`Matched dog name: ${dog_names[i]}`);
            return `Matched dog_string: ${dog_names[i]}`
        } 
    }
    console.log("No Matches")
}

//Call method here with parameters

findWords(dog_string, dog_names)
//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i, 1, "even index");
        }
    }
    console.log(arr);
    return arr;
}
replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Code wars 

// Question 1
/**
 * You're writing code to control your town's traffic lights. 
 * You need a function to handle each change from green, to yellow, to red,
 *  and then to green again.

Complete the function that takes a string as an argument representing 
the current state of the light and returns a string representing 
the state the light should change to.

For example, when the input is green, output should be yellow.
 */
function updateLight(current) {
    let lights = {
      "green": "yellow",
      "yellow": "red",
      "red": "green"
    };
    return lights[current];
  }
//   Question 2
/**
 * In this kata you will create a function that takes a list of
 *  non-negative integers and strings and returns a new list
 *  with the strings filtered out.
 */
 function filter_list(l) {
    return l.filter(element => Number.isInteger(element));
  }

//   Question 3
/***
 * Complete the function howManydays. It accepts 1 parameter month, 
 * which means the month of the year. Different months have a
 *  different number of days as shown in the table below. 
 * Return the number of days that are in month. 
 * There is no need for input validation: month will always 
 * be greater than 0 and less than or equal to 12.
 */
 function howManydays(month){
    let days;
    switch (month){
      case 2:
        days = 28;
        break;
      case 4:
        days = 30;
        break;
      case 6:
        days = 30;
        break;
      case 9:
        days = 30;
        break;
      case 11:
        days = 30;
        break;
      default:
        days = 31;
    }
    return days;
  }
//   Question 4
/**
 * Simple, remove the spaces from the string, then return the 
 * resultant string.
 * 
 */
 function noSpace(x){
    return x.split(" ").join("")
  }
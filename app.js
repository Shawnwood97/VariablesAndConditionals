// Array of ages
var age = [15, 18, 30, 5];

// Array of subscribed status
var isSubscribed = [false, false, true, true];

// Getting length of items in the Array to make the loop dynamic
var arrayLength = age.length;

// For loop that adds +1 to variable "i" every time it loops.
// Each loop, the counter is applied to the end of the variabless to indicate which item it is running.
for (var i = 0; i < arrayLength; i++) {
  if (age[i] < 18 && !isSubscribed[i]) {
    console.log("the user is younger than 18 and not subscribed");
  } else if (age[i] >= 18 && !isSubscribed[i]) {
    console.log("the user is 18 and older and not subscribed");
  } else if (age[i] < 18 && isSubscribed[i]) {
    console.log("the user is younger than 18 and is subscribed");
  } else if (age[i] >= 18 && isSubscribed[i]) {
    console.log("the user is 18 or older and is subscribed");
  } else {
    console.log("something is very very very wronggggggg?!?!?!?!?");
  }
}

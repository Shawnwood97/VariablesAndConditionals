var age = 17;
var isSubscribed = true;

if (age < 18 && isSubscribed === false) {
  console.log("the user is younger than 18 and not subscribed");
} else if (age >= 18 && isSubscribed === false) {
  console.log("the user is 18 and older and not subscribed");
} else if (age < 18 && isSubscribed === true) {
  console.log("the user is younger than 18 and is subscribed");
} else if (age >= 18 && isSubscribed === true) {
  console.log("the user is 18 or older and is subscribed");
} else {
  console.log("something is very very very wronggggggg?!?!?!?!?");
}

const level= 45
if(level > 50 )  {
    console.log("level is greater than 50")
} 
else if (level < 40) {
    console.log("level is low")
}
else {
    console.log("invalid level")
}

let UserAge = prompt("Enter your age");
let UserCountry = prompt("Please specify your country");

const requiredAge = 18;
const requiredRegion = "Nigeria";
let formattedUserAge = Number(UserAge);
let formattedUserCountry = String(UserCountry);

if (formattedUserAge < requiredAge && formattedUserCountry !== requiredRegion) {
alert("Age does not qualify and sorry, the app cannot open in this region.");
} else if (formattedUserAge >= requiredAge && formattedUserCountry === requiredRegion) {
alert('Welcome to our page, this app works in your country.');
} else if (formattedUserAge >= requiredAge || formattedUserCountry !== requiredRegion) {
alert('You did not meet one of the conditions.');
} else {
alert('Please specify your age.');
}

// Ternary operator
formattedUserAge >= requiredAge ? console.log("Yes") : console.log("Sorry");
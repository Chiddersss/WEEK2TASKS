// Monday if else statements PM plan


// // Example 1 -- 
// let weather = "rainy"

// if (weather === "sunny") {                 // has the first condition been met?
//     console.log("Well, I Better wear Sunscreen")
// } else if (weather === "rainy") {
//     console.log("Better take an umbrella")
// } else {
//     console.log("Hmm,it could go either way?")
// }


// Example 2 -- 
// if (1 == "1") {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Example 3 -- 
// let place = "Manc";
// let weather = "Sunny" 

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check Again");
// } 
// else if (place == "Manc" && weather == "Rain") {
//     console.log('Obvs');
// }
// else {
//     console.log("What it isn't raining?");
// }

// Example 4 -- Slide 20
// let day = "Mondays";

// if (day == "Saturday" || day == "Sunday" ){
//     console.log("it's the weekend!");
// }
// else {
//     console.log("When's the Weekend?");
// }

// // Example 5 -- Slide 22
// let car = "Peugeot";

// if (Car == "Ford" || car == "GM") {
//     console.log("You've got an American Car");
// }
// else if(car == "Peugeot" || car == "Citeroen") {
//     console.log("You've got a French boy!")
// }
// else if (car == "Honda" || car == "Toyota") {
//     console.log("Japanese cars are dead quiet")
// }
// else if (car == "Mercededs") {
//     console.log("You're a Proper Posh German!")
// }
// else if(car == "Volkswagen") {
//     console.log("German Cars aren't that bad")
// }
// else if(car == "Hyundai" || car == "Kia") {
//     console.log("South Koren cars are getting popular!");
// }
// else{
//     console.log("Your car is not in the top ten compaines of the world")
// }


// Switch statements -- Slide 25
// Example 6 -- 
// let car = "Peugeot"

// switch(car) {
//     case "Ford":
//     case "GM":
//         console.log("You've got an American Car!");
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French Boy!");
//         break;
//     case "Honda":
//     case "Suzuki":
//     case "Toyota":
//         console.log("Japanese cars are dead quiet!")
//         break;
//     case "Mercedes":
//         console.log("You are a proper posh german!")
//         break;
//     case "Volkswagen":
//         console.log("german cars aren't that bad")
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("sOuth Korean Cars are getting popular!")
//         break;
//     default:
//         console.log("Your car is not in the top 10 most popular brands of cars!")
// }

// Example 7 -- 
const grade = 87;

switch (true){
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}
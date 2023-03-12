// -- Example --
let offer = 'none';
let time = 1500;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],
   
    breakfastOffer: "Free Crossaint with Coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no Offer",

    openCafe: ()=> {
        return "Come on in!";
    },
    closeCafe: ()=> {
        return "We are closed, come back tomorrow!"
    }
}

console.log(cafe.openCafe());


// We can put each special in an object and select one at a specific time 

if (time < 1100) {
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} else if (time < 1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
} else {
    console.log(cafe.noOffer)
}

// -- Activity 1 --

const person = {
    name: "Hollie",
    age: 23,
    hobbies: ["Painting",
    'Video Games',
    "Cooking"],

    sayHi() {                                       // -- activity 1 cont --
        return `Hello my name is ${person.name}`;
    }
}

console.log(person.sayHi())

person.favouriteSongs = [
    "Particles - Nothing But Thieves",
    "Soda - Nothing But Thieves",
    "Purple Rain - Prince",
    "Me and your Mama - Childish Gambino",
    "Modennaminute - Smino",
    "Moral Panic - Nothing But Thieves"
]



// -- Activity 2 --
// -- Version 1 --
const alarms = {
    weekdayAlarm: "Get up at 7am",
    weekendAlarm: "No alarm needed"
}

let day = "Saturday", alarm

if(day == "Saturday" || day == "Sunday") {
    alarm = alarms.weekendAlarm
} else if([day == "Monday", day == "Tuesday", day == "Wednesday", day == "Thursaday", day =="Friday"]) {
    alarm = alarms.weekdayAlarm
}

console.log(alarm)

// -- Activity 4 --

let pet = {
    name: "Jake",
    typeOfPet: "Dog",
    age: 11,
    colour: [
        "grey",
        "black",
        "white"
    ],
    furType: "Too much fur",

    eat: () =>{
        return `${pet.name} should be eating a full english`
    },

    drink: () =>{
        return `${pet.name} should be drinking water`
    }

};

console.log(pet.eat());
console.log(pet.drink());

//  -- Activity 5 --

const coffeeShop = {
    branch: "Parr Arms",
    drinks: { 
       coffee: 2.5,
       latte: 3.0,
       cappuncino: 3.0,
       tea: 2.0,
       water: 0.6,

    },
    food: {
        croissant: 2.0,
        muffin: 2.5,
        sandwich: 3.0,
        Brownie: 2.75,
        GingerBread: 2.0,
    },

}

const order1 = { coffee: 2, latte: 1 };
console.log(coffeeshop.drinksOrdered(order1)); // "Your order is: 2 coffee(s), 1 latte(s) for a total of $8.00."

const order2 = { sandwich: 1, salad: 1 };
console.log(coffeeshop.foodOrdered(order2)); // "Your order is: 1 sandwich(es), 1 salad(s) for a total of $9.00."



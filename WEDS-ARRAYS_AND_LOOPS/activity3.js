//  -- TASK 1 -- 

let favouriteFilms = [
    "Shrek",
    "Shrek 2",
    "Spirted Away",
    "My Neighbour Tortoro",
   
]

favouriteFilms.push("Princess Mononoke", "Black Panther\n")
// console.log(favouriteFilms)

for(let i = 0; i < favouriteFilms.length; i++) {
    console.log(favouriteFilms[i])
}

// -- TASK 2 -- Generate 6 Random Numbers from 50
let arr = []

while(arr.length < 6) {
    let r = Math.floor(Math.random()* 50) +1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

console.log(arr.toString())

// -- TASK 3 -- Counting from 9-0

let count= []

for(i = 9; i <= 0; i--) {
    console.log(count)
}



// -- TASK 4 -- Displaying 4 films in an array

let films = [
    "Everest",
    "127 Hours",
    "The Lighthouse",
    "Demon Slayer"
] 

for(let i = 0; i < films.length; i++) {
    setTimeout(() => { console.log(films); },10000);  // adding a delay to printing to the console, wait until countdown is finished
}

// -- TASK 5 -- Generate a random number between 1 & 30 - 6 times 
let randomNum = []

for(let i = 0; i < 6; i++) {
    let randomNums = Math.floor(Math.random()*30) + 1;

    randomNum.push(randomNums);
}

console.log(randomNum)

// -- TASK 6 --
let bobsFollowers = [
    'John Montes',
    'Lewis Lane',
    'Emma Haas',
    'Katie Dotson',
    'Mike Lambert',
    'Felix Carr',
    'Richard Morgan'

]

let hannahsFollowers = [
    'Katie Dotson',
    'Richard Morgan',
    'Clara Sutton',
    'Victoria Barr',
    'Jemma Sutton',
    'Lewis Lane',
    'Abbey Haines'
]

function matchingFollowers() {
    for(i = 0; i < 0; i--);
    
}
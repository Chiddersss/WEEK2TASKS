// // -- Example 1 --

// // const pressGrindBeans = () => {
// //     console.log("Grinding for 20 Seconds");
// // }

// // pressGrindBeans();

// // -- Example 2 -- 
// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if(coffeeIsGrinding) {
//         console.log("Stopping the Grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grind is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans()



// // -- Example 3 --

// let accnumber = 50449921
// const cashWithdrawal = (amount, accnumber) => {
//     console.log(`Withdrawing ${amount} from account ${accnumber}`);
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50449921)


// // -- Example 4 --
// let celsius = 30

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7, 3);
// console.log(addUp(2, 5));

// // -- Example 5 -- 

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFarenheit = () => {
//     return multiplyByNineFifths(celsius) + 32;

// };

// console.log("The Tempreture is " + getFarenheit(15) + "ºF")

// -- Example 6 --

// function square(number) {  
//     return number * number;
// };

// console.log(square(5));

// -- Example 7 --

const square = function(number) {  
    return number * number;
};

console.log(square(5));
//  -- TASK 1 --

const factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));

// -- Activity 2 -- TEMPLATE
// let accNumber = 5043996;

// const cashWithdrawal = (amount, accNumber) => {
//     console.log(`Withdrawing ${amount} from account ${accNumber}`)
// }

// cashWithdrawal(300, accNumber)

// -- Activity 2 --cont...
// let accNum = 2038756;
// let pin = "2593";
// let accBal = 50000;

// function cashWithdrawal(accNum, amount, pin) {
//     if (pin = 2593) 
//         return(`Withdrawing ${amount} from ${accNum} `)
//     else {
//     return("Inncorrect pin")
//     }
// }

// cashWithdrawal(300, accNum)

// -- Activity 3 --
let orderCount = 0;
let topping = " "

const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
}

takeOrder("pineapple")
takeOrder("Pepperoni ")
console.log(orderCount)
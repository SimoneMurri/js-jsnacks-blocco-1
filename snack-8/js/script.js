
const userNumber = prompt('Type a sevent-digit number');

let sum = 0

if (userNumber.length === 7){

    for (let i = 0; i <  userNumber.length; i++) {
        sum += parseInt(userNumber[i]);
    }

    console.log("The sum of the seven-digit numer is:", sum);
}


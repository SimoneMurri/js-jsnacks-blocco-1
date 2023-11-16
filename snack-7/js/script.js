const array = []

for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt('Type your number'));
    console.log(userNumber);

    if (userNumber % 2 !== 0) {
        array.push(userNumber);
    }
}

console.log('The odd numbers entered are:', array);
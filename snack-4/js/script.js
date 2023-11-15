let array = [];

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 || i % 8 === 0){
        array.push(i);
    }
}
console.log(array);
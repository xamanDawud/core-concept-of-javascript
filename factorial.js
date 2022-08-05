function factorial(num) {
    let multi = 1;
    for (let i = 1; i <= num; i++) {
        multi *= i;
        console.log(i, multi);
    }
    return multi;
}
console.log(factorial(9));
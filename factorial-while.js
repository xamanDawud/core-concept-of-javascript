function factorialReverseByWhile(num) {
    let multi = 1;
    let i = 1;
    while (i <= num) {
        multi = multi * i;
        i++;
    }
    return multi;
}

console.log(factorialReverseByWhile(9));
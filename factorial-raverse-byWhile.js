function reverByWhile(num) {
    let multi = 1;
    let i = num;
    while (i >= 1) {
        multi = multi * i;
        i--;
    }
    return multi;
}

console.log(reverByWhile(9));
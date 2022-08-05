function factReverse(num) {
    let multi = 1;
    for (let i = num; i >= 1; i--) {
        multi = multi * i;
    }
    return multi;
}
console.log(factReverse(9));
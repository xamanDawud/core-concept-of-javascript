function isLeapYear(year) {
    let calculate = year % 4;
    if (calculate === 0) {
        return true;
    } else {
        return false;
    }
}

let year = isLeapYear(2026);
console.log(year);

// another leap year logic

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 == 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

let leapCheckYear = 2026;
console.log(isLeap(leapCheckYear));
prime = 2;
pCount = 1;
var primeChecker = function(x) {
    if (x < 2)
        return false;
    for (var count = 0; count < prime; count++)
        if (count % x === 0)
            return x;
};
console.log(primeChecker(5));
prime = 2;
pCount = 1;
var primeChecker = function(x) {
    if (x < 2)
        return false;
    var result = 1;
    for (var count = 0; count < prime; count++)
        if (result % x === 0)
            return result;
};
console.log(primeChecker(5));
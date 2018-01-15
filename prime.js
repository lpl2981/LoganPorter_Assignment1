prime = 2;
pCount = 1;
var primeChecker = function(x) {
    if (x < 2)
        return "Not a Prime";
    for (pCount; pCount < prime; pCount++) {
        if (pCount % x === 0)
            return x;
        else return "Not a Prime";
    }
};
console.log(primeChecker(6));
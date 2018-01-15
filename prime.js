prime = 2;
pCount = 1;
var primeChecker = function(x) {
    if (x < 2)
        return "Not a Prime";
    for (var count = 0; count < prime; count++) {
        if (count % x === 0)
            return x;
        else return "Not a Prime";
    }
};
console.log(primeChecker(6));
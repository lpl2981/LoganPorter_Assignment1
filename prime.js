var pCount = 2;
var primeChecker = function(x) {
    if (x < 2)
        return "Not a Prime";
    for (pCount; pCount < x; pCount++) {
        if (x % pCount === 0)
            return "Not a Prime";
    }
    return x;
};
console.log(primeChecker(4));
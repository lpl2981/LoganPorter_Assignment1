prime = 2;
pCount = 1;
var primeChecker = function(x) {
    if (x < 2)
        return false;
    if (x % x === 0)
        return true;
    else
        return false;
};
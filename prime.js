var pCount = 2;
var primeChecker = function(x) {
    if (x < 2)
        return false;
    for (pCount; pCount < x; pCount++) {
        if (x % pCount === 0)
            return false;
    }
    return x;
};
for (pCount = 0; pCount > 1000; pCount++) {
    if (primeChecker !== false) {
        console.log(pCount);
    }
        break;
}



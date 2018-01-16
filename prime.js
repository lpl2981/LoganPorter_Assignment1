function primeChecker(x) {
    if (x < 2)
        return false;
    for (var pCount = 2; pCount < x; pCount++) {
        if (x % pCount === 0)
            return false;
    }
    return x;
};
console.log(primeChecker(350));
/**
 First attempt with for loop, attempted 2nd time with while loop to get correct result :)

    for (var pCount = 0; pCount < 1000; pCount++) {
    if (primeChecker(pCount)) {
        console.log(pCount);
}
} **/
var pCount = 0;
var counter = 0;
while (pCount < 1000) {
    counter += 1;
    if (primeChecker(counter)) {
        pCount += 1;
    }
}
console.log(counter);

//initially completed on eloquentjavascript.net before migration to git//

for (var number = 1; number < 100; number++) {
    if (number % 3 == 0 && number % 5 != 0)
        console.log("Fizz");
    else if (number % 5 == 0 && number % 3 != 0)
        console.log("Buzz");
    else if (number % 3 == 0 && number % 5 == 0)
        console.log("FizzBuzz");
    else console.log(number);
}
//returns numbers 1-100 w/ Fizz, Buzz and Fizzbuzz for numbers divisible by 3 & 5 //
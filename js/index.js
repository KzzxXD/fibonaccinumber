//Рекурсія
function fib(n) {
    var number;
    if(n > 1){
        number = fib(n - 1) + fib(n - 2);
    }else {
        number = n;
    }
    return number;
}

document.write('Method Recursion: Result = ');
document.write(fib(prompt('Method Recursion: Enter number')));

document.write('<br>');

//масив
function fibonacci(number) {
    let numeric = [1, 1];

    for (var i = 2; i < number; i++) {
        numeric[i] = numeric[i-1]+ numeric[i-2];
    }
    return numeric[number-1];
}
document.write('Method Massif: Result = ');
document.write(fibonacci(prompt('Method Massif: Enter number')));

document.write('<br>');

//Цикл
function fib(n) {
    let number1,
        number2;
    for (var i = 1; i <= n; i++) {
        var c = number1 + number2 || 1;
        number1 = number2;
        number2 = c;
    }
    return c;
}

document.write('Method Cycle: Result = ');
document.write(fib(prompt('Method Cycle: Enter number')));


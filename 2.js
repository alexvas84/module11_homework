let x = +prompt('Введите число 0-1000');

function prostoe(n){
    let y = 0;
    for (let i = 0; i <= Math.trunc(Math.sqrt(n)) + 1; i++){
        if (n % i === 0 && y < 2) {
            y++;
        } else if (y == 2) {
            return "Составное число";
        }
    }
    if (y < 2) return "Простое число";
}


if (x <= 1000) {
    switch (x) {
        case 0:
            console.log(0);
            break;
        case 1:
            console.log("Простое число");
            break;
        case 2:
            console.log("Простое число");
            break;
        default:
            console.log(prostoe(x));
    }
} else {
    console.log("Ошибка!!!");
}

// Решение по сути верное, но не совсем соответствует заданию. Вся логика должна осуществляться внутри функции, у вас же в функции содержится только часть логики, остальное - снаружи. Также старайтесь всегда оформить решение проще и компактнее, например так:

function definePrime (num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if(num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
    } else if (num > 1000){
        result = 'Данные неверны';
    }
    return result;
}

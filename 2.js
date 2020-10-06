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
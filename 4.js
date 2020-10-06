let x = +prompt('Введите первое число');
let y = +prompt('Введите второе число');

function print(x, y){

    let intervalId = setInterval(() => {
        console.log(x);
        x++;
        if (x > y) clearInterval(intervalId);
    }, 1000);
}

print(x, y);
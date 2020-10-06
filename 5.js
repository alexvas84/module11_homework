let x = +prompt('Введите первое число');
let y = +prompt('Введите степень');

let stepen = (x, y) => {
    let i = 1;
    let result = x;
    while (i < y){
        result*=x;
        i++;
    }
    return result;
}
console.log(stepen(x, y));

let arr = ['j', 5, 2, 2, NaN];


function Count(arr) {
    let div2 = 0;
    let notDiv2 = 0;
    let zerro = 0;
    arr.forEach((item, index) => {
        if (typeof(item) === 'number' && !isNaN(item)){
            if (item !== 0){
                let x = item % 2;
                switch (x) {
                    case 0:
                        div2++;
                        break;
                    default:
                        notDiv2++;
                        break;
                };
            } else {
                zerro++;
            }
        }
    });
    console.log(`Четные - ${div2}, Не четные - ${notDiv2}, 0 - ${zerro}`);
}

Count(arr);

// Задание выполнено верно, но с одним недочетом - не учтены значения NaN. Несмотря на то, что NaN не является числом, его тип равен "number". Поэтому, чтобы отсеять это значение, нужна отдельная проверка. Выше добавила
let arr = ['j', 5, 2, 2];


function Count(arr) {
    let div2 = 0;
    let notDiv2 = 0;
    let zerro = 0;
    arr.forEach((item, index) => {
        if (typeof(item) === 'number'){
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
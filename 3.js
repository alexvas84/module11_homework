let func = function(n, y){
    return function(y){
        return n + y;
    }
}

let func2 = func(4);

console.log(func2(6));

var sortArrayByParity = function (A) {
    let r = []; //sonuç dizisi
    A.forEach((n) => { //eğer çift sayı İSE
        if (n % 2 === 0)
            r.push(n);
    })
    A.forEach((n) => {
        if (n % 2 !== 0) //eğer çift sayı DEĞİLSE. ! operatörüne dikkat edelim
            r.push(n);
    })
    return r;
};

//aynı döngüyü iki defa çalıştırdık, ilkinde çift sayıları ikincisinde tek sayıları sonuç dizisine eklemiş olduk.
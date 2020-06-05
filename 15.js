function findArrayInArray(innerArray, outerArray) { //bu fonksiyon komple stackoverflow'dan //array içinde array olup olmadığını belirliyor,
    // tekrar yazmaya gerek duymadım iyi çalışıyor
    const innerArrayString = JSON.stringify(innerArray);
    let index = 0;
    const inArray = outerArray.some(function (element) {
        index++;
        return JSON.stringify(element) === innerArrayString;
    });
    if (inArray) {
        return index - 1;
    } else {
        return -1;
    }
}


let threeSum = function (nums) {
    let sol = []; //sonuç array'i
    nums.sort((a, b) => a - b) // küçükten büyüğe sıralama
    for (let i = 0; i < nums.length - 2; i++) { // burada üç tane loop yazdım, birinci: ilk elemandan sondan üçüncü elemana kadar,
        for (let j = i + 1; j < nums.length - 1; j++) { //ikincisi: ikinci elemandan sondan ikinci elemana kadar
            for (let k = j + 1; k < nums.length; k++) { //üçüncüsü: üçüncü elemandan son elemana kadar döngü halinde. Böylece tek geçişte hepsini kontrol ediyoruz.
                if (nums[i] + nums[j] + nums[k] === 0 && findArrayInArray([nums[i], nums[j], nums[k]], sol) === -1) //toplamlarının 0'a eşit, ve daha önce bulunmamış bir 
                    //array olduğuna emin oluyoruz
                    sol.push([nums[i], nums[j], nums[k]]) //eğer öyleyse sonucu döndürmemiz yeterli
            }
        }
    }
    return sol;
};


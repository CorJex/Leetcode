var distributeCandies = function (cand) {
    let candies = cand.slice().sort((a, b) => a - b); //slice kopyalamak için, sort küçükten büyüğe sıralamak için
    let last = null; //atanmamış değişken olarak başlatıyorum
    let differentCandiesCount = 0; //sonucu hesapladığımız değişken
    for (let i = 0; i < candies.length; i++) { //candies'deki her eleman için döngü 
        if (candies[i] !== last) { //bir öncekinden farklıysa
            last = candies[i]; //bir öncekine eşitle
            differentCandiesCount++; //ve sonuç'a bir ekle
        }
    }
    if (differentCandiesCount > (candies.length / 2)) //farklı şeker sayısı toplam şeker sayısının yarısından fazla olamaz
        return (candies.length / 2); // eğer fazlaysa, direkt olarak candies.length/2 döndürebiliriz.
    return differentCandiesCount //sonucu döndür
};
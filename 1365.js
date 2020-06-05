let smallerNumbersThanCurrent = function (numsArr) {
    let sortedNumsArr = numsArr.slice().sort((a, b) => a - b)
    return numsArr.map(i => sortedNumsArr.indexOf(i))
}

smallerNumbersThanCurrent([3, 2, 4, 5, 6, 1]);

//bonus soru

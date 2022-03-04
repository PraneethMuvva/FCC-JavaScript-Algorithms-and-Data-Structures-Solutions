function convertToRoman(num) {
    let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = "";
    while(num !== 0){
        let index = numArr.findIndex(e => num - e >= 0);
        result += romanArr[index];
        num -= numArr[index];
    }
    return result;
}
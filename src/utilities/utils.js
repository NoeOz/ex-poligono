export function transformRoman(number) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const simbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let romanNum = "";
    for (var i = 0; i < values.length; i++) {
      while (number >= values[i]) {
        romanNum += simbols[i];
        number -= values[i];
      }
    }
    return romanNum;
  }
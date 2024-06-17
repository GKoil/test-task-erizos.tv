function myParseInt(str: string): number {
  let result = 0;
  let isNegative = false;
  let i = 0;

  if (str[0] === '-') {
    isNegative = true;
    i = 1;
  }

  for (; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);

    // Check if the character is a digit
    if (charCode >= 48 && charCode <= 57) {
      result = result * 10 + (charCode - 48);
    } else {
      throw new Error('Invalid input string');
    }
  }

  return isNegative ? -result : result;
}

console.log(myParseInt('123') + 2); // 125
console.log(myParseInt('-123') + 2); // -121
console.log(myParseInt('0') + 2); // 2

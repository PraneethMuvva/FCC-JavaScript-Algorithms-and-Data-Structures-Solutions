function palindrome(str) {
    let newStr = str.toLowerCase().split(/\W|_/g).join("")
    return newStr === newStr.split("").reverse().join("");
  }
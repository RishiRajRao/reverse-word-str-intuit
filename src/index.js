function reverseWord(str) {
  let n = str.length,
    j,
    newStr = "";
  for (let i = (j = n - 1); i >= 0; i--) {
    if (str.charCodeAt(i - 1) === 32 || i === 0) {
      let k = i;
      while (k <= j) {
        newStr += str[k];
        k++;
      }
      newStr += " ";
      j = i - 2;
    }
  }
  console.log("res==", newStr);
}

reverseWord("getting good at coding needs a lot of practice");

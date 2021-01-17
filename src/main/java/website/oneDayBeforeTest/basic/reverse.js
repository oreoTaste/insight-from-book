function reverse(str) {
  return str.split("").reverse().join("");
}
function recurReverse(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + recurReverse(str.slice(0, str.length - 1));
}
console.log(reverse("123456789"));
console.log(recurReverse("123456789"));

let str = "NEGIE1";
let splitString = str.split("");
let reverse = splitString.reverse();
let newString = reverse.join("").substring(1) + str.charAt(5);
console.log(newString);

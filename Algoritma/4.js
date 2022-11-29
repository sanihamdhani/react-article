let value1 = [1, 5, 9];
let value2 = [0, 5, 7];
let total = 0;
for (i = 0; i < value1.length; i++) {
  total += value1[i];
}
for (j = 0; j < value2.length; j++) {
  total -= value2[j];
}
console.log(total);

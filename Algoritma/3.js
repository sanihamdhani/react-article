INPUT = ["xc", "dz", "bbb", "dz"];
QUERY = ["bbb", "ac", "dz"];
var count = [];
let test = [...INPUT];
test.forEach(function (i) {
  count[i] = (count[i] || 0) + 1;
});
console.log(count);

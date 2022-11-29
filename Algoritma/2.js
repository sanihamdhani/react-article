function CariKata(str) {
  var kata = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return kata[0] + " : " + kata[0].length + " character ";
}

console.log(
  CariKata("Saya sangat senang mengerjakan soal algoritma mengerjakan ")
);

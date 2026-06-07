
let numbers = [3, 5, 10,4,5,5,9,30, 2, 8];

function calcolaStatistiche(array) {
  let somma = array.reduce((acc, num) => acc + num, 0);
  let media = somma / array.length;
  let valoriMinori = array.filter(num => num < media);
  let valoriMaggiori = array.filter(num => num > media);
  console.log(`Media = ${media}`);
  console.log(`Valori minori = [${valoriMinori}]`);
  console.log(`Quantità valori minori = ${valoriMinori.length}`);
  console.log(`Quantità valori maggiori = ${valoriMaggiori.length}`);
}
calcolaStatistiche(numbers);
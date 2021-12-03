let custo = 3.90;
let valorVenda = 10;

if (custo >= 0 && valorVenda >= 0) {
  let totalCusto = custo * 1.2;
  let lucro = (valorVenda - totalCusto) * 1000;
  console.log(lucro);
} else {
  console.log("Error, os valores não podem ser negativos");
};
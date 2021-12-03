let inss;
let ir;

let salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

let salarioLiquido = salarioBruto - inss;

if (salarioLiquido <= 1903.98) {
  ir = 0;
} else if (salarioLiquido <= 2826.65) {
  ir = (salarioLiquido * 0.075) - 142.80;
} else if (salarioLiquido <= 3751.05) {
  ir = (salarioLiquido * 0.15) - 354.80;
} else if (salarioLiquido <= 4664.68) {
  ir = (salarioLiquido * 0.225) - 636.13;
} else {
  ir = (salarioLiquido * 0.275) - 869.36;
};

console.log("Salário: " + (salarioLiquido - ir));
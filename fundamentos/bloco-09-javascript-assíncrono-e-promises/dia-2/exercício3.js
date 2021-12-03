/* Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array. */

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const meuArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );

    const soma = meuArray
      .map((number) => number * number)
      .reduce((acc, curr) => acc + curr);

    soma < 8000 ? resolve(soma) : reject(soma);
  });

  promise
    .then((soma) => [2, 3, 5, 10].map((divisao) => soma / divisao))
    .then((divisao) => console.log(`Promise resolvida ${divisao}`))
    .catch((soma) => console.log(`Promise rejeitada ${soma}`));
};

fetchPromise();

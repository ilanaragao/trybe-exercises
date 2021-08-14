/* Agora, um passo para trás: vamos fazer, passo a passo, uma Promise.
* Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
* Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada.
* Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione. */

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
    .then((soma) => console.log(`Promise resolvida ${soma}`))
    .catch((soma) => console.log(`Promise rejeitada ${soma}`));
};

fetchPromise();

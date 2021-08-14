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

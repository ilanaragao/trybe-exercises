const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

/* Exercício 1 */

function authorBornIn1947() {
  return books.find((livro) => livro.author.birthYear === 1947).author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

/* Exercício 2 */

function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  books.forEach((livro) => {
    if (!nameBook || livro.name.length < nameBook.length) {
      nameBook = livro.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

/* Exercício 3 */

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((livro) => livro.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

/* Exercício 4 */

const expectedResult2 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort(
    (livroA, livroB) => livroB.releaseYear - livroA.releaseYear
  );
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult2);

/* Exercício 5 */

const expectedResult3 = false;

function everyoneWasBornOnSecXX() {
  return books.every(
    (livro) => livro.author.birthYear > 1900 && livro.author.birthYear <= 2000
  );
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult3);

/* Exercício 6 */

const expectedResult4 = true;

function someBookWasReleaseOnThe80s() {
  return books.some(
    (livro) => livro.releaseYear >= 1980 && livro.releaseYear <= 1989
  );
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult4);

/* Exercício 7 */

const expectedResult5 = false;

function authorUnique() {
  return books.every(
    (livro) =>
      !books.some(
        (algumLivro) =>
          algumLivro.author.birthYear === livro.author.birthYear &&
          algumLivro.author.name !== livro.author.name
      )
  );
}

assert.strictEqual(authorUnique(), expectedResult5);

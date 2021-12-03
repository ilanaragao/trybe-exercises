let pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei pode andar uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo pode andar em Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha pode andar em Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo pode andar em "L" e pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre pode andar em Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão anda apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
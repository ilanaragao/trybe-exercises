function soma(num) {
  let total = 0;
  for (let index = 1; index <= num; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(soma(5));
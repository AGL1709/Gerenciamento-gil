// 4.2 Kata TDD
// - Escreva o teste que falha (Red).****** fatorialTeste.js V******
// - Faça passar com solução mínima (Green).****** fatorial.js V******
// - Limpe o código (Refactor).



function fatorial(n) {
  if (n === 0) return 1;
  if (n === 5) return 120; // hardcoded só pra passar o teste de 5
}

module.exports = fatorial;


// A partir de agora estou respondendo a Questão: Limpe o código (Refactor).

function fatorial(n) {
  if (n === 0) return 1;

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

module.exports = fatorial;

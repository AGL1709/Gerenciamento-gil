// 4.2 Kata TDD
// - Escreva o teste que falha (Red).****** fatorialTeste.js V******
// - Faça passar com solução mínima (Green).****** fatorial.js V******
// - Limpe o código (Refactor).

const fatorial = require('./fatorial');

test('Fatorial de 0 deve ser 1', () => {
  expect(fatorial(0)).toBe(1);
});

test('Fatorial de 5 deve ser 120', () => {
  expect(fatorial(5)).toBe(120);
});

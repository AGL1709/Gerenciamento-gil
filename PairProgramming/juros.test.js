const { calcularJuros } = require('./juros');

test('juros simples 1000, 10%, 2 meses = 200', () => {
  expect(calcularJuros(1000, 0.1, 2)).toBe(200);
});

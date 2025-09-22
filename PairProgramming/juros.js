
function calcularJuros(principal, taxa, periodo) {
  return principal * taxa * periodo;
}

module.exports = { calcularJuros };

// Uma função com bug poderia ser assim: 

// Bug proposital: o cálculo está errado

// function calcularJuros(principal, taxa, periodo) {
//   // Erro: somando periodo em vez de multiplicar
//   return principal * taxa + periodo; 
// }

// module.exports = { calcularJuros };

// Seu feedback seria: 

// FAIL  ./juros.test.js
//   ✕ juros simples 1000, 10%, 2 meses = 200

//   Expected: 200
//   Received: 100.1  // Exemplo de bug proposital

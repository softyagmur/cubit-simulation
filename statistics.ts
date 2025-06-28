type Qubit = [number, number];

// Superposition forming Hadamard gate
function Hadamard(qubit: Qubit): Qubit {
  const [a, b] = qubit;
  const newa = (a + b) / Math.sqrt(2);
  const newb = (a - b) / Math.sqrt(2);
  return [newa, newb];
}
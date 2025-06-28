type Qubit = [number, number];

// Superposition forming Hadamard gate
function Hadamard(qubit: Qubit): Qubit {
  const [a, b] = qubit;
  const newa = (a + b) / Math.sqrt(2);
  const newb = (a - b) / Math.sqrt(2);
  return [newa, newb];
}

// Measurement ψ² is used
function measure(qubit: Qubit): 0 | 1 {
  const [a, b] = qubit;
  const p0 = a ** 2;
  return Math.random() < p0 ? 0 : 1;
}
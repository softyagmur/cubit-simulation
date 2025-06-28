import config from "./config.json";
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

// Simulation
const trials = config?.number_of_qubit_simulation_trials;
let counts = { 0: 0, 1: 0 };

for (let i = 0; i < trials; i++) {
  let qubit: Qubit = [1, 0]; // |0⟩
  qubit = Hadamard(qubit); // H|0⟩ = (|0⟩ + |1⟩)/√2
  const result = measure(qubit);
  counts[result]++;
}

console.log(`Total ${trials} trial!`);
console.log(`0 number of times measured ${trials}/${counts[0]}`);
console.log(`1 number of times measured ${trials}/${counts[1]}`);

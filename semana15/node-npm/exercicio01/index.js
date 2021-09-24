const name = process.argv[2];
const age = process.argv[3];
const futureAge = Number(process.argv[3]) + 7;

console.log(
  `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}.`
);

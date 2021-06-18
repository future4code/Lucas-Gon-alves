// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite uma altura:"));
  const largura = Number(prompt("Digite uma largura:"));
  const area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNascimento = Number(prompt("Digite o ano do seu nascimento:"));
  const idadeAtual = anoAtual - anoNascimento;
  console.log(idadeAtual);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / altura ** 2;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Digite o seu nome:");
  const idadeUsuario = Number(prompt("Digite a sua idade:"));
  const emailUsuario = prompt("Digite o seu email:");
  console.log(
    `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const arrCores = [];
  const cor1 = prompt("Digite uma das suas cores favoritas");
  const cor2 = prompt("Digite uma das suas cores favoritas");
  const cor3 = prompt("Digite uma das suas cores favoritas");
  arrCores.push(cor1, cor2, cor3);
  console.log(arrCores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = primeiroElemento;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  return string1 === string2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const ano = Number(prompt("Digite o ano atual:"));
  const anoNasc = Number(prompt("Digite o ano do seu nascimento:"));
  const anoEmissao = Number(
    prompt("Digite o ano da emissão da sua identidade:")
  );
  const condicao1 = ano - anoNasc <= 20 && ano - anoEmissao >= 5;
  const condicao2 =
    ano - anoNasc > 20 && ano - anoNasc <= 50 && ano - anoEmissao >= 10;
  const condicao3 = ano - anoNasc > 50 && ano - anoEmissao >= 15;
  const condicaoFinal = condicao1 || condicao2 || condicao3;
  console.log(condicaoFinal);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond = (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
  return cond;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idadeParaInscrever = prompt("Você tem mais de 18 anos?");
  const possuiEnsinoMedio = prompt("Você possui ensino médio completo?");
  const disponibilidadeHorario = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );
  const condicoesTotais =
    idadeParaInscrever == "sim" &&
    possuiEnsinoMedio == "sim" &&
    disponibilidadeHorario == "sim";
  console.log(condicoesTotais);
}

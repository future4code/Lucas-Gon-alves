// Exercício 1

// a) O construtor serve para criarmos os parâmetros de onde tiraremos os dados dos argumentos ao instanciar a classe.

// b) Apenas uma vez, a mensagem é impressa a cada chamada.

// c) Conseguimos ter acesso às propriedades privadas de uma classe utilizando métodos getter's.

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

const user = new UserAccount("123456789", "Lucas", 26);

// Exercício 2

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  public getDescription = (): string => this.description;
  public getValue = (): number => this.value;
  public getDate = (): string => this.date;

  constructor(description: string, value: number, date: string) {
    console.log("Chamando o construtor da classe Transaction");
    this.description = description;
    this.value = value;
    this.date = date;
  }
}

// Exercício 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}

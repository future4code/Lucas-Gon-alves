## Exercício 1

**a)** create table é para criar uma nova tabela contendo as colunas que vier a digitar a seguir, varchar é para adicionar uma string que contenha até o tamanho máximo de caracteres digitado.

**b)** Show Databases => mostra todos os bancos de dados disponíveis. Show Tables => mostra todas as tabelas criadas para um banco de dados.

**c)** Cada linha é um item da coluna da tabela em questão, onde mostra o nome do campo, o tipo, se é vazio, se é chave primária e se possui algum valor padrão.

## Exercício 2

**a)**

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");
```

**b)** Erro de duplicação de chave primária, cada item na tabela deverá possuir chaves diferentes.

**c)** A quantidade de colunas não são compatíveis com a quantidade de argumentos passados.

**d)** O campo nome não está recebendo os argumentos com os tipos certo.

## Exercício 3

**a)**

```sql
select * from Actor where gender = "female";
```

**b)**

```sql
select salary from Actor where name = "Tony Ramos";
```

**c)** Não retorna nenhuma linha.

**d)**

```sql
select id, name, salary from Actor where salary <= 500000;

```

**e)** A query está buscando o nome usando o termo "nome" e não o termo "name".

## Exercício 4

**a)** Selecione todos os atores onde seus nomes comecem com A ou com J e que tenham um salário maior que 300.000.

**b)**

```sql
select * from Actor where name not like "A%" and salary > 350000;
```

**c)**

```sql
select * from Actor where name like "%g%" or name like "%G%";
```

**d)**

```sql
select * from Actor where (name like "%A%" or name like "%a%" or
name like "%G%" or name like "%g%") and salary between 350000 and 900000;
```

## Exercício 5

**a)** Essa query recebe um id único, nome, a sinopse, a data de lançamento e a avaliação de cada filme.

```sql
insert into Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
values
(001, "Se eu fosse você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "06/01/2006", 7),
(002, "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "27/12/2012", 10),
(003, "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "02/11/2017", 8),
(004, "O Homem do Futuro", "João/Zero (Wagner Moura) é um cientista genial, mas infeliz porque há 20 anos foi humilhado publicamente durante uma festa e perdeu Helena (Alinne Moraes), uma antiga e eterna paixão.", "02/09/2011", 7);
```

## Exercício 6

**a)**

```sql
select id, nome, avaliacao from Filmes where id = 004;
```

**b)**

```sql
select * from Filmes where nome = "Se eu fosse você";
```

**c)**

```sql
select id, nome, sinopse from Filmes where avaliacao >= 7;
```

## Exercício 7

**a)**

```sql
select * from Filmes where nome like "%vida%";
```

**b)**

```sql
select * from Filmes
where nome like "%TERMO DE BUSCA%" or
      sinopse like "%TERMO DE BUSCA%";
```

**c)**

```sql
select * from Filmes
where data_de_lancamento < "2020-05-04";
```

**d)**

```sql
select * from Filmes
where data_de_lancamento < "2020-05-04" and
      (nome like "%TERMO DE BUSCA%" or
      sinopse like "%TERMO DE BUSCA%") and avaliacao > 7
```

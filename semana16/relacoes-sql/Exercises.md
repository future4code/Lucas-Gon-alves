# Exercício 1

**a)** Chave estrangeira é o campo que estabelece o relacionamento entre duas tabelas.

**b)**

```sql
INSERT INTO
  Rating (id, comment, rate, movie_id)
VALUES
  ("001", "Muito bom!", 7, "004");
```

**c)** O banco de dados não conseguiu encontrar uma chave primária com o ID passado, visto que ela não existe.

**d)**

```sql
ALTER TABLE Movie DROP COLUMN rating;
```

**e)** Não é possível deleter uma linha pai, outra tabela está usando os dados da tabela 'Movies'. É necessário apagar a tabela 'Rating' antes de apagar a tabela pai.

# Exercício 2

**a)** Cria um identificador para os filmes e um para os atores, associa cada id com suas respectivas tabelas.

**b)**

```sql
INSERT INTO
  MovieCast (movie_id, actor_id)
VALUES
  ("001", "001"),
  ("001", "002"),
  ("002", "003"),
  ("002", "004"),
  ("003", "004"),
  ("003", "005");
```

# Exercício 3

**a)** O operador ON serve para criar uma condição para evitar a total combinação de todos os itens das tabelas.

**b)**

```sql
SELECT
  m.id as movie_id,
  r.rate as rating
FROM
  Movie m
  INNER JOIN Rating r ON m.id = r.movie_id;
```

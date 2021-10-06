# Exercício 1

**a)**

**b)**

```ts
const searchActor = async (name: string) => {
  const result = await connection.raw(`
        select * from Actor where name = "${name}"
    `);
  return result;
};
```

**c)**

```ts
const countActors = async (gender: string) => {
  const result = await connection.raw(
    `select count(*) as count from actor where gender = "${gender}"`
  );
  const count = result[0][0].count;
  return count;
};
```

# Exercício 2

**a)**

```ts
const updateActor = async (id: string, salary: number) => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

**b)**

```ts
const deleteActor = async (id: string) => {
  await connection("Actor").delete().where("id", id);
};
```

**c)**

```ts
const avgSalary = async (gender: string) => {
  const result = await connection("Action")
    .avg("salary as average")
    .where({ gender });
  return result[0].average;
};
```

# Exercício 3

```ts
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

# Exercício 4

**a)**

```ts
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

**b)**

```ts
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

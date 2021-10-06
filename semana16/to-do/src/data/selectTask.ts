import connection from "../connection";

const selectTask = async (id: string) => {
  const result = await connection.raw(`
        SELECT tasks.*, users.nickname
        FROM to_do_list_tasks as tasks
        JOIN to_do_list_users as users 
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `);
  return result[0][0];
};

export default selectTask;

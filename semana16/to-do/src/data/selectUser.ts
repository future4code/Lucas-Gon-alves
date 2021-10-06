import connection from "../connection";

const selectUser = async (id: string) => {
  const result = await connection("to_do_list_users").select("*").where({ id });
  return result[0];
};

export default selectUser;

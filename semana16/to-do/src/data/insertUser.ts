import connection from "../connection";

const insertUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
) => {
  await connection
    .insert({
      id,
      name,
      nickname,
      email,
    })
    .into("to_do_list_users");
};

export default insertUser;

import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscription: boolean;
  role: string;
};

class UserRepository {
  async create(user: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (first_name, last_name, email, password, subscription, role) values (?, ?, ?, ?, ?, ?)",
      [
        user.firstName,
        user.lastName,
        user.email,
        user.password,
        user.subscription,
        user.role,
      ],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id = ?",
      [id],
    );

    return rows[0] as User;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select *, first_name as firstName, last_name as lastName from user",
    );
    return rows as User[];
  }

  async update(user: User) {
    const [result] = await databaseClient.query<Result>(
      "update user set first_name = ?, last_name = ?, email = ?, password = ?, subscription = ?, role = ? where id = ?",
      [
        user.firstName,
        user.lastName,
        user.email,
        user.password,
        user.subscription,
        user.role,
        user.id,
      ],
    );
    return result.affectedRows;
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from user where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new UserRepository();

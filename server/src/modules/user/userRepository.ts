import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hashedPassword: string;
  subscription: boolean;
  role: string;
};

class UserRepository {
  async create(user: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (first_name, last_name, email, hashed_password) values (?, ?, ?, ?)",
      [user.first_name, user.last_name, user.email, user.hashedPassword],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT first_name, last_name, email, role FROM user WHERE id = ?",
      [id],
    );

    return rows[0] as User;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select *, first_name, last_name from user",
    );
    return rows as User[];
  }

  async readByEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
    return rows[0];
  }

  async update(user: User) {
    const [result] = await databaseClient.query<Result>(
      "update user set first_name = ?, last_name = ?, email = ?, hashed_password = ?, subscription = ?, role = ? where id = ?",
      [
        user.first_name,
        user.last_name,
        user.email,
        user.hashedPassword,
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

  async readWatchlistByUser(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT m.* 
      FROM user u 
      INNER JOIN watchlist wa 
      ON u.id = wa.user_id 
      INNER JOIN movie m 
      ON wa.movie_id = m.id 
      WHERE u.id = ?`,
      [id],
    );
    return rows;
  }
  async addToWatchlist(user_id: number, movie_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "insert into watchlist (user_id, movie_id) values (?, ?)",
      [user_id, movie_id],
    );
    return rows;
  }
}

export default new UserRepository();

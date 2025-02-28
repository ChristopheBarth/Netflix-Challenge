import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
type Movie = {
  id: number;
  title: string;
  synopsis: string;
  releaseYear: number;
  duration: string;
  poster: string;
  trailer: string;
  casting: string;
  production: string;
  genres?: string;
};

class MovieRepository {
  async create(movie: Omit<Movie, "id" | "genres">) {
    const [result] = await databaseClient.query<Result>(
      "insert into movie (title, synopsis, release_year, duration, poster, trailer, casting, production) values (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        movie.title,
        movie.synopsis,
        movie.releaseYear,
        movie.duration,
        movie.poster,
        movie.trailer,
        movie.casting,
        movie.production,
      ],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT
      m.id,
      m.title,
      m.synopsis,
      m.release_year,
      m.duration,
      m.poster,
      m.trailer,
      m.casting,
      m.production,
      GROUP_CONCAT(g.name SEPARATOR ', ') AS genres
      FROM movie m
      LEFT JOIN movie_genre mg ON m.id = mg.movie_id
      LEFT JOIN genre g ON mg.genre_id = g.id
      WHERE m.id = ?
      GROUP BY m.id`,
      [id],
    );

    return rows[0] as Movie;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT
      m.id,
      m.title,
      m.synopsis,
      m.release_year,
      m.duration,
      m.poster,
      m.trailer,
      m.casting,
      m.production,
      GROUP_CONCAT(g.name SEPARATOR ', ') AS genres
      FROM movie m
      LEFT JOIN movie_genre mg ON m.id = mg.movie_id
      LEFT JOIN genre g ON mg.genre_id = g.id
      GROUP BY m.id`,
    );
    return rows as Movie[];
  }

  async update(movie: Movie) {
    const [result] = await databaseClient.query<Result>(
      "update movie set title = ?, synopsis = ?, release_year = ?, duration = ?, poster = ?, trailer = ?, casting = ?, production = ?, where id = ?",
      [
        movie.title,
        movie.synopsis,
        movie.releaseYear,
        movie.duration,
        movie.poster,
        movie.trailer,
        movie.casting,
        movie.production,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from movie where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}
export default new MovieRepository();

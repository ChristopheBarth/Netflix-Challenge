import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
type MovieGenre = {
  id: number;
  movie_id: number;
  genre_id: number;
  title: string;
  synopsis: string;
  release_year: string;
  duration: string;
  poster: string;
  trailer: string;
  casting: string;
  production: string;
  genres?: string;
};

class MovieGenreRepository {
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
    return rows[0] as MovieGenre;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT
      m.id,
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
    return rows as MovieGenre[];
  }
}

export default new MovieGenreRepository();

import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Movie = {
  id: number;
  title: string;
  synopsis: string;
  release_year: number;
  duration: string;
  poster: string;
  trailer: string;
  casting: string;
  production: string;
  landscape_image?: string;
  genres?: string;
  premium: boolean;
};

class MovieRepository {
  async create(movie: Omit<Movie, "id" | "genres">): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO movie (title, synopsis, release_year, duration, poster, trailer, casting, production, landscape_image, premium) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        movie.title,
        movie.synopsis,
        movie.release_year,
        movie.duration,
        movie.poster,
        movie.trailer,
        movie.casting,
        movie.production,
        movie.landscape_image,
        movie.premium,
      ],
    );
    return result.insertId;
  }

  async read(id: number): Promise<Movie> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT
        m.*,
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

  async readAll(): Promise<Movie[]> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT
        m.*,
        GROUP_CONCAT(g.name SEPARATOR ', ') AS genres
      FROM movie m
      LEFT JOIN movie_genre mg ON m.id = mg.movie_id
      LEFT JOIN genre g ON mg.genre_id = g.id
      GROUP BY m.id`,
    );
    return rows as Movie[];
  }

  async readTop10(): Promise<Movie[]> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT
        m.*,
        GROUP_CONCAT(g.name SEPARATOR ', ') AS genres
      FROM movie m
      LEFT JOIN movie_genre mg ON m.id = mg.movie_id
      LEFT JOIN genre g ON mg.genre_id = g.id
      GROUP BY m.id
      ORDER BY m.id DESC
      LIMIT 10`,
    );
    return rows as Movie[];
  }

  async update(movie: Movie): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "UPDATE movie SET title = ?, synopsis = ?, release_year = ?, duration = ?, poster = ?, trailer = ?, casting = ?, production = ?, landscape_image = ?, premium = ? WHERE id = ?",
      [
        movie.title,
        movie.synopsis,
        movie.release_year,
        movie.duration,
        movie.poster,
        movie.trailer,
        movie.casting,
        movie.production,
        movie.landscape_image,
        movie.premium,
        movie.id,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM movie WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new MovieRepository();

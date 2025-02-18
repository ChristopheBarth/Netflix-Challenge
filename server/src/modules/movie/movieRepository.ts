import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
type Movie = {
  id: number;
  title: string;
  synopsis: string;
  release_year: string;
  duration: string;
  poster: string;
  trailer: string;
};

class MovieRepository {
  // The C of CRUD - Create operation

  async create(movie: Omit<Movie, "id">) {
    // Execute the SQL INSERT query to add a new item to the "movie" table
    const [result] = await databaseClient.query<Result>(
      "insert into movie (title, synopsis, release_year, duration, poster, trailer) values (?, ?, ?, ?, ?, ?)",
      [
        movie.title,
        movie.synopsis,
        movie.release_year,
        movie.duration,
        movie.poster,
        movie.trailer,
      ],
    );

    // Return the ID of the newly inserted movie
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific movie by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from movie where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the movie
    return rows[0] as Movie;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all movies from the "movie" table
    const [rows] = await databaseClient.query<Rows>("select * from movie");

    // Return the array of movies
    return rows as Movie[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing movie

  // async update(movie: movie) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an movie by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new MovieRepository();

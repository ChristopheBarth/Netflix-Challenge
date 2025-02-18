create table user (
  id int unsigned primary key auto_increment not null,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email varchar(255) not null unique,
  password varchar(255) not null,
  subscription BOOLEAN NOT NULL,
  role VARCHAR(50) NOT NULL,
  watchlist_id int not null
);

create table movie (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  synopsis TEXT not null,
  release_year YEAR  not null,
  duration TIME not null,
  poster TEXT NOT NULL,
  trailer TEXT NOT NULL
  -- foreign key(user_id) references user(id)
);

create table genre (
id int unsigned primary key auto_increment not null,
name VARCHAR(255) not null
);

create table MovieGenre (
movie_id INT NOT NULL,
genre_id INT NOT NULL
);

create table Watchlist (
movie_id int not null,
user_id int not null
);

-- insert into item(id, title, user_id)
-- values
--   (1, "Stuff", 1),
--   (2, "Doodads", 1);

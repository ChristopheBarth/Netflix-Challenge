create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
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



-- insert into item(id, title, user_id)
-- values
--   (1, "Stuff", 1),
--   (2, "Doodads", 1);

create table user (
  id int unsigned primary key auto_increment not null,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email varchar(255) not null unique,
  password varchar(255) not null,
  subscription BOOLEAN NOT NULL,
  role VARCHAR(50) NOT NULL
);

create table movie (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  synopsis TEXT not null,
  release_year YEAR  not null,
  duration TIME not null,
  poster VARCHAR(255) NOT NULL,
  trailer VARCHAR(255) NOT NULL,
  casting TEXT NOT NULL,
  production TEXT NOT NULL
);

create table genre (
id int unsigned primary key auto_increment not null,
name VARCHAR(255) not null
);

create table movie_genre (
movie_id INT NOT NULL,
genre_id INT NOT NULL
);

create table watchlist (
movie_id int not null,
user_id int not null
);

insert into movie (title, synopsis, release_year, duration, poster, trailer, casting, production)
VALUES
  ("Matrix","Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ? Nul ne le sait, et aucun homme n'est encore parvenu à en percer les defenses. Mais Morpheus est persuadé que Neo est l'Elu, le libérateur mythique de l'humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents...", "1999", "02:15:00",  "https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg", "https://www.youtube.com/watch?v=vKQi3bBA1y8&ab_channel=RottenTomatoesClassicTrailers", "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving", "Lilly Wachowski et Lana Wachowski"),
  ("Inception","Un voleur spécialisé dans l'extraction d'informations secrètes par le biais du partage de rêves se voit confier l'impossible mission d'implanter une idée dans l'esprit d'un dirigeant...", "2010", "2:28:00","https://images.affiches-et-posters.com//albums/3/4532/medium/4532-affiche-film-inception-cast.jpg", "https://www.youtube.com/watch?v=YoHD9XEInc0", "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy", "Warner Bros. Pictures, Legendary Pictures, Syncopy"),
  ("The Godfather", "Le patriarche vieillissant d'une puissante famille mafieuse transfère le contrôle de son empire clandestin à son fils réticent, déclenchant une série de trahisons et de conflits familiaux...", "1972", "2:55:00", "https://i.ebayimg.com/images/g/kWQAAOSwArteJsIw/s-l1200.jpg", "https://www.youtube.com/watch?v=sY1S34973zA", "Marlon Brando, Al Pacino, James Caan", "Paramount Pictures"),
  ("The Shawshank Redemption", "Condamné à la prison à vie, un banquier entretient une amitié inattendue qui l'aide à trouver la rédemption et l'espoir derrière les barreaux...", "1994", "2:22:00", "https://images.squarespace-cdn.com/content/v1/657716dc6cd59d329f8cc943/1702303456952-89SVMRXKDUZ65S4279HJ/TSRL+Poster.jpg", "https://www.youtube.com/watch?v=6hB3S9bIaco", "Tim Robbins, Morgan Freeman", "Castle Rock Entertainment"),
  ("The Dark Knight", "Batman doit affronter le Joker, un criminel sadique qui transforme Gotham en un terrain de chaos, mettant à l'épreuve ses idéaux et sa détermination...", "2008", "2:32:00", "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg", "https://www.youtube.com/watch?v=EXeTwQWrcwY", "Christian Bale, Heath Ledger, Aaron Eckhart", "Warner Bros. Pictures"),
  ("Fight Club", "Un employé de bureau insatisfait et un vendeur de savon forment un club secret de combat, qui dégénère en une organisation anarchique aux conséquences imprévues...", "1999", "2:19:00", "https://fr.web.img6.acsta.net/r_1280_720/pictures/210/212/21021246_20130719135446815.jpg", "https://www.youtube.com/watch?v=SUXWAEX2jlg", "Brad Pitt, Edward Norton, Helena Bonham Carter", "20th Century Fox, Regency Enterprises"),
  ("Nomadland", "Une femme qui a tout perdu se lance dans un voyage à travers l'Ouest américain, adoptant le mode de vie d'une nomade moderne...", "2020", "1:47:00", "https://www.wiztopic.com/file/fx648pt7qg-phpnxojjt", "https://www.youtube.com/watch?v=6sxCFZ8_d84", "Frances McDormand, David Strathairn", "Searchlight Pictures"),
  ("Dune", "Dans un futur lointain, la lutte pour le contrôle d'une planète riche en ressources mène à des conflits interstellaires et politiques...", "2021", "2:35:00", "https://m.media-amazon.com/images/I/71XlZvKMwoL.jpg", "https://www.youtube.com/watch?v=n9xhJrPXop4", "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac", "Warner Bros. Pictures, Legendary Entertainment, Villeneuve Films"),
  ("The Power of the Dog", "Dans le Montana des années 1920, un charismatique rancher cache des secrets sombres qui vont perturber l'équilibre d'une famille...", "2021", "2:06:00", "https://media.senscritique.com/media/000020786307/0/the_power_of_the_dog.jpg", "https://www.youtube.com/watch?v=UpRzGl792tk", "Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons", "Fox Searchlight Pictures"),
  ("Everything Everywhere All at Once", "Une femme ordinaire se retrouve plongée dans une aventure interdimensionnelle pour sauver le multivers, confrontée à d'innombrables versions d'elle-même...", "2022", "139", "https://media.senscritique.com/media/000021157918/0/everything_everywhere_all_at_once.png", "https://youtu.be/wxN1T1uxQ2g", "Michelle Yeoh, Ke Huy Quan, Stephanie Hsu", "A24"),
  ("Drive My Car", "Suite à la perte de sa femme, un acteur se lance dans un voyage introspectif en acceptant un rôle dans une production théâtrale singulière...", "2021", "2:59:00", "https://fr.web.img5.acsta.net/pictures/21/08/04/12/37/4421523.jpg", "https://youtu.be/6BPKPb_RTwI", "Hidetoshi Nishijima, Reika Kirishima", "ROK International");
  



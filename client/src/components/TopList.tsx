import "../styles/toplist.css";

export default function TopList() {
  // Exemple de données : remplacez par vos vraies images et vos vrais titres
  const items = [
    {
      rank: 1,
      title: "Nomadland",
      imgSrc: "https://www.wiztopic.com/file/fx648pt7qg-phpnxojjt",
    },
    {
      rank: 2,
      title: "Mercato",
      imgSrc:
        "https://media.senscritique.com/media/000022592994/300/mercato.jpg",
    },
    {
      rank: 3,
      title: "Bird",
      imgSrc: "https://media.senscritique.com/media/000022481993/300/bird.png",
    },
    {
      rank: 4,
      title: "Criminal Squad",
      imgSrc:
        "https://media.senscritique.com/media/000022545552/300/criminal_squad_pantera.png",
    },
    {
      rank: 5,
      title: "Babygirl",
      imgSrc:
        "https://media.senscritique.com/media/000022574299/300/babygirl.png",
    },
    {
      rank: 6,
      title: "Maria",
      imgSrc: "https://media.senscritique.com/media/000022484202/300/maria.png",
    },
    {
      rank: 7,
      title: "Wolf Man",
      imgSrc:
        "https://media.senscritique.com/media/000022567984/300/wolf_man.png",
    },
    {
      rank: 8,
      title: "Vol à haut risque",
      imgSrc:
        "https://media.senscritique.com/media/000022582019/300/vol_a_haut_risque.jpg",
    },
    {
      rank: 9,
      title: "Un parfait inconnu",
      imgSrc:
        "https://media.senscritique.com/media/000022600281/300/un_parfait_inconnu.png",
    },
    {
      rank: 10,
      title: "Monkey",
      imgSrc:
        "https://media.senscritique.com/media/000022466997/300/the_monkey.png",
    },
    // … ajoutez autant d’éléments que nécessaire
  ];

  return (
    <section className="top-list">
      <h1>Top 10 des films aujourd’hui : France</h1>
      <div className="items-container">
        {items.map(({ rank, title, imgSrc }) => (
          <div key={rank} className="item" data-rank={rank}>
            <div className="thumbnail">
              <img src={imgSrc} alt={title} />
              <span className="badge">Ajout récent</span>
            </div>
            <p className="title">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

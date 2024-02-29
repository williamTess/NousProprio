import { team } from "../../constant";

const AboutPage = () => {
  let isEven = true;

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl font-bold p-5 ">Nos Valeurs</h1>
      <div className="flex flex-col p-10 w-full max-w-3xl self-center">
        <p>
          Nousproprio a été conçu pour que l’expérience client soit unique !
          Notre site permet une formation personnalisée. Chacun d’entre vous
          souhaite réaliser des projets différents sur le marché de
          l’immobilier.
          <br /> <br />
          Nousproprio repose sur les compétences d’intervenants ayant vécu et
          appris les rouages du marché immobilier.
          <br /> <br />
          La boîte repose sur le recrutement d'humains soucieux de partager
          leurs expériences et de participer à cette aventure avec vous. Notre
          boîte à taille humaine recherche avant tout la qualité à la quantité.
          <br /> <br />
          Notre prix se base sur la quantité d'heures fournies pour réaliser et
          adapter, en fonction des profils, le contenu de nos formations
          personnalisées, le développement de fichiers de calculs (rentabilité
          etc.) et la conception de nos designs (visuel de formations, slides,
          format vidéo).
          <br /> <br />
          Enfin, le site se voit nommé Nousproprio, pour « Nous propriétaire »
          <br /> <br />
          Notre challenge; vous aider en s’adaptant à vos souhaits !
          <br /> <br />
          Parce que nous ne formons qu’un, remplaçons les « vous » par des nous.
          <br /> <br />« Lançons nous ! »
        </p>
      </div>
      <h1 className="text-center text-3xl font-bold p-5 ">Notre équipe</h1>
      {team.map((member) => {
        isEven = !isEven;
        const infos = [
          <div className="min-w-11">
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>,
          <div
            className={`flex flex-col self-center ${isEven && "text-right"}`}
          >
            <h1 className="font-bold text-2xl mb-2">{member.name}</h1>
            <p>
              {member.icon} {member.role}
            </p>
            <p>{member.description}</p>
          </div>,
        ];
        return (
          <>
            <div
              key={member.name}
              className={`flex flex-col items-center p-10 ${
                isEven ? "bg-gray-light text-white" : "bg-white text-gray-light"
              }`}
            >
              <div
                className={`flex flex-row w-full max-w-3xl justify-between gap-2`}
              >
                {isEven ? infos.map((t) => t) : infos.reverse().map((t) => t)}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AboutPage;

import { team } from "../../constant";

const AboutPage = () => {
  let isEven = true;
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-4xl font-bold p-5">Notre équipe</h1>
      {team.map((member) => {
        isEven = !isEven;
        const infos = [
          <img
            src={member.img}
            alt={member.name}
            className="w-40 h-40 rounded-full object-cover"
          />,
          <div className={`flex flex-col self-center`}>
            <h1 className="font-bold text-2xl">{member.name}</h1>
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
              className={`flex flex-col items-center p-7 ${
                isEven ? "bg-slate-500 text-white" : "bg-white"
              }`}
            >
              <div className="flex flex-row gap-20">
                {isEven ? infos : infos.reverse()}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AboutPage;

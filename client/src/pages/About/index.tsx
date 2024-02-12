import { team } from "../../constant";

const AboutPage = () => {
  let isEven = true;

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl font-bold p-5">Notre équipe</h1>
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
                isEven ? "bg-gray-light text-white" : "bg-white"
              }`}
            >
              <div
                className={`flex flex-row w-full max-w-3xl justify-around gap-2`}
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

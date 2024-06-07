import { team } from "../../constant";

export const Team = () => {
  let isEven = true;

  return team.map((member) => {
    isEven = !isEven;
    const infos = [
      <div className="min-w-32 self-center" key={member.name}>
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>,
      <div
        className={`flex flex-col self-center ${isEven && "text-right"}`}
        key={member.description}
      >
        <h1 className="font-bold text-2xl mb-2">{member.name}</h1>
        <p>
          {member.icon} {member.role}
        </p>
        <p>
          {member.description.split("\n").map((des) => (
            <span key={des}>{des}</span>
          ))}
        </p>
      </div>,
    ];
    return (
      <div key={member.name}>
        <div
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
      </div>
    );
  });
};

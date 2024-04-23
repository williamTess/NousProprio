import { boss } from "../../constant";

type BossProps = {
  sizeAccordingWidth: string;
  isPortrait: boolean;
};

export const Boss = ({ sizeAccordingWidth, isPortrait }: BossProps) => {
  return (
    <div className={`${sizeAccordingWidth} flex flex-col max-w-7xl m-auto`}>
      <p className="text-blue-400 mb-6">Qui est derrière tout ça ?</p>
      <h1 className="font-semibold text-3xl mb-10">
        Apprenons à se connaitre ?
      </h1>
      <div
        className={`flex flex-1 justify-between items-center ${
          isPortrait && "flex-col items-center text-center"
        }`}
      >
        <img
          src={boss.img}
          alt={boss.name}
          className="w-40 h-40 rounded-full object-cover"
        />
        <div className={`flex flex-col w-[70%] xl:w-[80%]`}>
          <div
            className={`flex text-2xl mb-3 items-center ${
              isPortrait && "self-center mb-6 mt-4"
            }`}
          >
            <b>{boss.name}</b>  
            <span className="mb-0.5">{boss.icon}</span> {boss.role}
          </div>
          <div className={`text-lg mb-4`}>
            {boss.list.map((e) => (
              <div key={e}>- {e}</div>
            ))}
          </div>
          <p className="text-lg">{boss.description}</p>
        </div>
      </div>
    </div>
  );
};

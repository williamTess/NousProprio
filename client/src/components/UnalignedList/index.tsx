import { Link } from "react-router-dom";

interface ListProps {
  list: { image: string; title: string; description: string; to: string }[];
  isFirstTime?: boolean;
}

export const UnalignList = (props: ListProps) => {
  const { list, isFirstTime = false } = props;
  let isEven = true;

  return (
    <div className="flex flex-col gap-1">
      {list.map((elem, index) => {
        const isDisabled = isFirstTime && index > 0;
        const infos = [
          <div className="sm:flex hidden" key={elem.image}>
            <img
              src={elem.image}
              alt={elem.title}
              className={`w-32 h-32 rounded-full object-cover ${
                isDisabled && "grayscale"
              }`}
            />
          </div>,
          <div
            className={
              "flex flex-col self-center w-full sm:w-[65%] text-center"
            }
            key={elem.description}
          >
            <h1 className="font-bold text-2xl sm:text-3xl mb-2">
              {elem.title}
            </h1>
            <p className="sm:text-xl">{elem.description}</p>
          </div>,
        ];
        isEven = !isEven;
        const styleAlternate = isEven
          ? "bg-blue-dark sm:self-end hover:bg-blue-dark/90 hover:cursor-pointer"
          : "bg-main hover:bg-main/90 hover:cursor-pointer";
        const styleDisabled =
          isDisabled && "!bg-gray-400 hover:!bg-gray-400 hover:!cursor-default";

        return (
          <Link
            to={isDisabled ? "" : elem.to}
            key={elem.title}
            className={`flex flex-col items-center px-16 py-7 rounded-3xl sm:rounded-full w-full sm:w-[80%] 
                text-white ${styleAlternate} ${styleDisabled}`}
          >
            <div className={`flex flex-row w-full justify-between gap-2`}>
              {!isEven ? infos.map((t) => t) : infos.reverse().map((t) => t)}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

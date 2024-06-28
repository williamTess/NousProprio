import YouTube from "react-youtube";

export const WelcomePage = () => {
  return (
    <div>
      <div>WelcomePage</div>
      <div className={`w-[60%] h-[400px] mb-5`}>
        <YouTube videoId="_DzWrxnN3Cg" className="w-full h-full" />
      </div>
    </div>
  );
};

import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRef } from "react";
import { Presentation } from "./Presentation";
import { Video } from "./Video";
import { Boss } from "./Boss";
import { Comments } from "./Comments";
import VideoHeader from "./HeaderVideo.mp4";

const HomePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const videoRef = useRef<HTMLInputElement>(null);
  const sizeAccordingWidth = isPortrait ? "w-full" : "w-[80%]";
  const sizeAccordingHeight = isPortrait ? "h-[300px]" : "h-[450px]";

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col h-[250px] sm:h-[600px] 2xl:h-[800px] overflow-x-hidden overflow-y-hidden -mt-24 sm:-mt-52 
        bg-gradient-to-b from-transparent via-gray-light via-85% to-gray-light"
      >
        <video
          src={VideoHeader}
          loop
          autoPlay
          muted
          className="object-cover object-center h-screen w-screen -z-10"
        ></video>
      </div>
      <div className="bg-gray-light text-white flex flex-col py-8 pt-5 px-10 sm:px-20 -mt-10 sm:-mt-20 2xl:-mt-28">
        <Presentation
          videoRef={videoRef}
          sizeAccordingWidth={sizeAccordingWidth}
          isPortrait={isPortrait}
        />
      </div>
      <div className="py-8 px-10 sm:px-20 flex flex-col" ref={videoRef}>
        <Boss sizeAccordingWidth={sizeAccordingWidth} isPortrait={isPortrait} />
      </div>
      <div className="py-8 px-10 sm:px-20 flex flex-col bg-gray-light text-white">
        <Comments
          sizeAccordingWidth={sizeAccordingWidth}
          isPortrait={isPortrait}
        />
      </div>
      <div className="py-8 px-10 sm:px-20 flex flex-col">
        <Video
          sizeAccordingHeight={sizeAccordingHeight}
          sizeAccordingWidth={sizeAccordingWidth}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default HomePage;

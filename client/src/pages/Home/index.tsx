import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRef } from "react";
import { Presentation } from "./Presentation";
import { Video } from "./Video";
import { Boss } from "./Boss";
import { Comments } from "./Comments";

const HomePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const videoRef = useRef<HTMLInputElement>(null);
  const sizeAccordingWidth = isPortrait ? "w-full" : "w-[80%]";
  const sizeAccordingHeight = isPortrait ? "h-[300px]" : "h-[450px]";

  return (
    <div className="flex flex-col">
      <div className="bg-gray-light text-white flex flex-col py-20 px-10 sm:px-20">
        <Presentation
          videoRef={videoRef}
          sizeAccordingWidth={sizeAccordingWidth}
          isPortrait={isPortrait}
        />
      </div>
      <div className="py-20 px-10 sm:px-20 flex flex-col" ref={videoRef}>
        <Boss sizeAccordingWidth={sizeAccordingWidth} isPortrait={isPortrait} />
      </div>
      <div className="py-20 px-10 sm:px-20 flex flex-col bg-gray-light text-white">
        <Comments
          sizeAccordingWidth={sizeAccordingWidth}
          isPortrait={isPortrait}
        />
      </div>
      <div className="py-16 px-10 sm:px-20 flex flex-col">
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

type CommentsProps = {
  sizeAccordingWidth: string;
  isPortrait: boolean;
};

export const Comments = ({ sizeAccordingWidth }: CommentsProps) => {
  return (
    <div className={`${sizeAccordingWidth} flex flex-col max-w-7xl m-auto`}>
      <h1 className="font-semibold text-3xl mb-10">L'avis des étudiants</h1>
      <div
        className="elfsight-app-765c2ea1-ef81-480f-9183-2d648a567d2a"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

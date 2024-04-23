import React from "react";
import { commentaries } from "../../constant";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Comment } from "../../components/Comment";

type CommentsProps = {
  sizeAccordingWidth: string;
  isPortrait: boolean;
};

export const Comments = ({ sizeAccordingWidth, isPortrait }: CommentsProps) => {
  const theme = useTheme();
  const commentsPerSlide = isPortrait ? 1 : 3;
  const [activeStep, setActiveStep] = React.useState(
    commentsPerSlide > 1 ? 1 : 0
  );
  const maxSteps = commentaries.length - (commentsPerSlide - 1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className={`${sizeAccordingWidth} flex flex-col max-w-7xl m-auto`}>
      <h1 className="font-semibold text-3xl mb-10">L'avis des étudiants</h1>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          flexGrow: 1,
          alignSelf: "center",
        }}
      >
        <div className="flex justify-center md:justify-between">
          {commentaries[activeStep - 1] && (
            <Comment
              comment={commentaries[activeStep - 1]}
              className={`${isPortrait && "hidden"}`}
            />
          )}
          <Comment comment={commentaries[activeStep]} />
          {commentaries[activeStep + 1] && (
            <Comment
              comment={commentaries[activeStep + 1]}
              className={`${isPortrait && "hidden"}`}
            />
          )}
        </div>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          className="!bg-gray-light !text-white"
          activeStep={commentsPerSlide > 1 ? activeStep - 1 : activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={
                activeStep ===
                (commentsPerSlide === 1 ? maxSteps - 1 : maxSteps)
              }
            >
              Suivant
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === (commentsPerSlide === 1 ? 0 : 1)}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Précédent
            </Button>
          }
        />
      </Box>
    </div>
  );
};

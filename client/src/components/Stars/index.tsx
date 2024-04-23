import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import StarsIcon from "@mui/icons-material/Stars";

type StarsProps = {
  rate: number;
};

export const Stars = ({ rate }: StarsProps) => {
  const colorAccordingToRating = rate <= 3 ? "orange" : "#6BD575";
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: colorAccordingToRating,
    },
  });

  return (
    <StyledRating
      name="customized-color"
      defaultValue={rate}
      icon={<StarsIcon fontSize="inherit" />}
      readOnly
      emptyIcon={<StarsIcon fontSize="inherit" />}
    />
  );
};

import { Button } from "@mui/material";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const ButtonMUI = (props: Props) => {
  const {
    color = "primary",
    variant = "contained",
    fullWidth = true,
    value = "YOU NEED A VALUE",
    ...rest
  } = props;
  return (
    <Button color={color} variant={variant} fullWidth={fullWidth} {...rest}>
      {value}
    </Button>
  );
};

import { TextField } from "@mui/material";
import { capitalize } from "../../utils/capitalize";

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  [key: string]: unknown;
}

export const InputFormik = (props: Props) => {
  const { name, formik, ...rest } = props;
  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      type={name}
      label={capitalize(name)}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...rest}
    />
  );
};

import { TextField } from "@mui/material";
import { capitalize } from "../../../utils/capitalize";

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  [key: string]: unknown;
}

const labels: Record<string, string> = {
  username: "Nom d'utilisateur",
  email: "Email",
  password: "Mot de passe",
  phoneNumber: "Numéro de téléphone",
  statusText: "Vos attentes",
};

export const InputFormik = (props: Props) => {
  const { name, formik, ...rest } = props;
  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      type={name}
      label={labels[name] || capitalize(name)}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...rest}
    />
  );
};

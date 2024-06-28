import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { capitalize } from "../../../utils/capitalize";
import { UserJobs } from "../../../type";

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
  statusText: "Votre status",
};

export const SelectFormik = (props: Props) => {
  const { name, formik, ...rest } = props;

  return (
    <FormControl>
      <InputLabel>{labels[name] || capitalize(name)}</InputLabel>
      <Select
        fullWidth
        id={name}
        name={name}
        type={name}
        label={labels[name] || capitalize(name)}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        //   helperText={formik.touched[name] && formik.errors[name]}
        {...rest}
      >
        <MenuItem value={UserJobs.STUDENT}>Etudiants</MenuItem>
        <MenuItem value={UserJobs.ALTERNATE}>Alternants</MenuItem>
        <MenuItem value={UserJobs.CDI}>Employé en CDI</MenuItem>
        <MenuItem value={UserJobs.CDD}>Employé en CDD</MenuItem>
        <MenuItem value={UserJobs.ON_THEIR_OWN}>A mon compte</MenuItem>
      </Select>
      {formik.touched[name] && (
        <FormHelperText>{formik.errors[name]}</FormHelperText>
      )}
    </FormControl>
  );
};

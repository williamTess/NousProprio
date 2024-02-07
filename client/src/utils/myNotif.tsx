import { Notyf } from "notyf";
import { Status } from "../type";

interface Props {
  status: Status;
}

export const myNotif = ({ status }: Props) => {
  const notyf = new Notyf();
  const handleNotif = (status: Status) => {
    switch (status) {
      case Status.SUCCESS:
        notyf.success("Success");
        break;
      case Status.ERROR:
        notyf.error("Error");
        break;
      default:
        break;
    }
  };
  handleNotif(status);
};

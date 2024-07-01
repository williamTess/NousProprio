import { UserJobs } from "../type";

export const getStatus = (status: string) => {
  switch (status) {
    case UserJobs.ALTERNATE:
      return "alternant";
    case UserJobs.CDD:
      return "employé en CDD";
    case UserJobs.CDI:
      return "employé en CDI";
    case UserJobs.ON_THEIR_OWN:
      return "travailleur à son compte";
    case UserJobs.STUDENT:
      return "étudiant";
    default:
      return "travailleur";
  }
};

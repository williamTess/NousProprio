import { UserJobs } from "../type";

export const getWelcomeVideoId = (status: string) => {
  switch (status) {
    case UserJobs.ALTERNATE:
      return "lGeye7mW5XY";
    case UserJobs.CDD:
      return "QvjEpBpESos";
    case UserJobs.CDI:
      return "ddrT56_fw5U";
    case UserJobs.ON_THEIR_OWN:
      return "dw-_91hogZ0";
    case UserJobs.STUDENT:
      return "_DzWrxnN3Cg";
    default:
      return "travailleur";
  }
};

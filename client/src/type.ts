import { ReactElement } from "react";

export type User = {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  phoneNumber: string;
  statusText: string;
  firstConnexion: boolean;
};

export type HeaderTab = {
  to: string;
  label: string;
  icon: ReactElement;
};

export enum Status {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  img: string;
  icon: ReactElement;
};

export type Comment = {
  username: string;
  photo: string;
  rate: number;
  title: string;
  description: string;
};

export type Card = {
  title: string;
  description: string;
};

export enum UserJobs {
  STUDENT = "STUDENT",
  CDI = "CDI",
  CDD = "CDD",
  ALTERNATE = "ALTERNATE",
  ON_THEIR_OWN = "ON_THEIR_OWN",
}

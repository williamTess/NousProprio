import { ReactElement } from "react";

export type User = {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  phoneNumber: string;
  statusText: string;
};

export type HeaderTab = {
  to: string;
  label: string;
  icon: ReactElement;
};

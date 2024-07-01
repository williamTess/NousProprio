import { request } from "../../utils/request";
import { User } from "../../type";
import { getUrlMode } from "../../utils/getUrlMode";

type UserResponse = User & {
  success: boolean;
  error: string;
};

export const signUp = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res: Promise<UserResponse> = await request("post", "/api/auth/signup", {
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return res;
};

export const signIn = async (data: { email: string; password: string }) => {
  const res: Promise<UserResponse> = await request("post", "/api/auth/signin", {
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return res;
};

export const updateUser = async (
  data: { username?: string; email?: string; profilePicture?: string },
  id?: string
) => {
  const res: Promise<UserResponse> = await request(
    "post",
    `api/user/update/${id}`,
    {
      body: JSON.stringify(data),
    }
  ).then((data) => data.json());

  return res;
};

export const deleteUser = async (id?: string) => {
  const res: Promise<UserResponse> = await request(
    "delete",
    `api/user/delete/${id}`
  ).then((data) => data.json());

  return res;
};

export const validateTutorialUser = async (id: string) => {
  const apiUrl = getUrlMode();

  const res: Promise<UserResponse> = await request(
    "post",
    `${apiUrl}/user/validate-tutorial/${id}`,
    {
      body: JSON.stringify({ firstConnexion: false }),
    }
  ).then((data) => data.json());

  return res;
};

export const signOut = async () => {
  await request("get", "/api/auth/signout");
};

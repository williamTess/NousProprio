import { Notyf, NotyfEvent } from "notyf";
import { Status, User } from "../type";

export const myNotif = (status: Status, text: string, redirect?: string) => {
  const notyf = new Notyf({ duration: 5000, dismissible: true });

  const handleNotif = (status: Status) => {
    let notif;

    switch (status) {
      case Status.SUCCESS:
        notif = notyf.success(text);
        if (redirect)
          notif.on(NotyfEvent.Click, () => (window.location.href = redirect));
        break;
      case Status.ERROR:
        notyf.error(text);
        break;
      default:
        break;
    }
  };
  handleNotif(status);
};

export const getSignInNotif = (d: User) => {
  d.statusText
    ? myNotif(
        Status.SUCCESS,
        `Vous êtes connecté en tant que <b>${d.username}</b>`
      )
    : myNotif(
        Status.SUCCESS,
        "Vous êtes connecté , n'oubliez pas de compléter votre profil. <b><U>Cliquez ici<U/></b>",
        "/profile"
      );
};

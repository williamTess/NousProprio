export const request = (
  type: string,
  uri: string,
  data?: { body?: string }
) => {
  switch (type) {
    case "post":
      return fetch(uri, {
        method: type.toUpperCase(),
        headers: { "Content-Type": "application/json" },
        body: data?.body,
      });
    case "get":
    case "delete":
      return fetch(uri, {
        method: type.toUpperCase(),
        headers: { "Content-Type": "application/json" },
      });

    default:
      return fetch(uri);
  }
};

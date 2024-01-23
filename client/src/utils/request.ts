export const request = (type: string, uri: string, data: { body?: string }) => {
  switch (type) {
    case "post":
      return fetch(uri, {
        method: type.toUpperCase(),
        headers: { "Content-Type": "application/json" },
        body: data.body,
      });
    default:
      return fetch(uri);
  }
};

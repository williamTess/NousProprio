export const getUrlMode = () => {
  if (import.meta.env.MODE === "development")
    return "http://localhost:5173/api";
  else return "https://nous-proprio.onrender.com/api";
};

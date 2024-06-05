import { FAQ } from "./FAQ";

export const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-10 px-10 sm:px-20">
        <h1 className="text-center text-3xl font-bold p-5">Notre FAQ</h1>
        <FAQ />
      </div>
    </div>
  );
};

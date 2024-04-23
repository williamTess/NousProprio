import { Presentation } from "./Presentation";
import { Team } from "./Team";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl font-bold p-5 ">Nos Valeurs</h1>
      <Presentation />
      <h1 className="text-center text-3xl font-bold p-5 ">Notre équipe</h1>
      <Team />
    </div>
  );
};

export default AboutPage;

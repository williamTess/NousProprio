import AccordionList from "../../components/Accordion";
import { FaqQuestions } from "../../constant";

export const FAQ = () => {
  return (
    <div className="max-w-7xl m-auto">
      <AccordionList questions={FaqQuestions} />
    </div>
  );
};

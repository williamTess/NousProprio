import AccordionList from "../../components/Accordion";
import { FaqQuestions } from "../../constant";

export const FAQ = () => {
  return (
    <div>
      <AccordionList questions={FaqQuestions} />
    </div>
  );
};

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card } from "../../type";

type AccordionProps = {
  questions: Card[];
};

export default function AccordionList({ questions }: AccordionProps) {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Comment fonctionne la FAQ ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si tu as des questions tu peux les chercher dans notre FAQ et si tu
            ne trouve pas ton bonheur n'hésite pas à nous contacter, nous te
            répondrons aussi vite que possible avec des réponses tout aussi
            claires
          </Typography>
        </AccordionDetails>
      </Accordion>
      {questions.map((question) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>{question.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

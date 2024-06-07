import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card } from "../../type";
import { useState } from "react";

type AccordionProps = {
  questions: Card[];
};

export default function AccordionList({ questions }: AccordionProps) {
  const defaultTitle = "Comment fonctionne la FAQ ?";
  const [expanded, setExpanded] = useState<string | false>(defaultTitle);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        defaultExpanded
        expanded={expanded === defaultTitle}
        onChange={handleChange(defaultTitle)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            fontWeight={"bold"}
            className={`${expanded === defaultTitle && "text-main"}`}
          >
            {defaultTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tu as des questions ? Jette un œil à notre FAQ ! Et si tu ne trouves
            pas ce que tu cherches, contacte-nous. On te répondra avec des infos
            claires et précises !
          </Typography>
        </AccordionDetails>
      </Accordion>
      {questions.map((question) => (
        <Accordion
          expanded={expanded === question.title}
          onChange={handleChange(question.title)}
          key={question.title}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              fontWeight={"bold"}
              className={`${expanded === question.title && "text-main"}`}
            >
              {question.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

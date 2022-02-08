import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const List = ({ country }) => {
  const getfirstInput = (obj) => {
    const firstInput = Object.keys(obj)[0];
    return firstInput;
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Other Names</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{country.altSpellings.join("\r\n")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Region</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{country.region}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Borders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{country.borders.join("\r\n")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Currencies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {country.currencies[getfirstInput(country.currencies)].name}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default List;

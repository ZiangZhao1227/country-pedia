import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const List = ({ country, getfirstInput }) => {
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
          {country.borders ? country.borders.join("\r\n") : <p>None borders</p>}
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
          {country.currencies ? (
            country.currencies[getfirstInput(country.currencies)].name
          ) : (
            <p>None currencies</p>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default List;

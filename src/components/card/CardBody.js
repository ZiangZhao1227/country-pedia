import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./Card.css";
import List from "./List";

const CardBody = ({ country, navigate }) => {
  return (
    <div className="card-container">
      <Card className="card-container__body">
        <CardMedia
          component="img"
          image={country.flags.png}
          alt="country flag"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component={"span"}>
            {country.name.official}
          </Typography>
          <List country={country} />
        </CardContent>
        <Box textAlign="center">
          <Button
            size="large"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default CardBody;

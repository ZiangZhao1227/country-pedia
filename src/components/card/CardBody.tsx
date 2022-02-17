import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useNavigate } from "react-router-dom";

import "./Card.css";
import List from "../list/List";
import { Fragment } from "react";
import Logo from "../../components/logo/Logo";

interface countryDetailProps {
  countryDetail: {
    flags: {
      png: string;
    };
    name: {
      official: string;
    };
    altSpellings: [];
    region: string;
  };
}

const CardBody = ({ countryDetail }: countryDetailProps) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Logo />
      <div className="card-container">
        <Card className="card-container__body">
          <CardMedia
            component="img"
            image={countryDetail.flags.png}
            alt="country flag"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="overline"
              component={"span"}
              className="card-container__name"
            >
              {countryDetail.name.official}
            </Typography>
            <List countryDetail={countryDetail} />
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
    </Fragment>
  );
};

export default CardBody;

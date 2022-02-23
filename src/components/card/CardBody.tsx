import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useNavigate } from "react-router-dom";

import "./Card.css";
import List from "../list/CardDetailList";
import { Fragment } from "react";
import Logo from "../../components/logo/Logo";
import { CountryBodyProps } from "../../types/Types";
import FavoriteIcon from "../table/FavoriteIcon";

const CardBody = ({ countryDetail }: CountryBodyProps) => {
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
            <Box textAlign="center">
              <FavoriteIcon
                countryObject={{
                  CountryName: countryDetail.name.common,
                  CountryFlag: countryDetail.flags.png,
                }}
              />
            </Box>
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

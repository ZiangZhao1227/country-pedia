import { Fragment } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const LoadingCard = () => {
  return (
    <Fragment>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={13}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height={60}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width={450}
          height={150}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width="25%"
          height={500}
          animation="wave"
        />
      </Stack>
    </Fragment>
  );
};

export default LoadingCard;

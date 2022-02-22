import { Fragment } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const LoadingHome = () => {
  return (
    <Fragment>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={15}
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
          width="90%"
          height={60}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={700}
          animation="wave"
        />
      </Stack>
    </Fragment>
  );
};

export default LoadingHome;

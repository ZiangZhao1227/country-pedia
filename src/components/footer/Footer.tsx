import {
  Typography,
  Container,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const toMyGitLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/ziang-zhao-2301061a2/";
  };
  const toMyGitHub = () => {
    window.location.href = "https://github.com/ZiangZhao1227/CountryPedia";
  };
  const useStyles = makeStyles({
    root: {
      paddingBottom: 20,
      paddingTop: 20,
    },
  });
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Typography>© Ziang Zhao 2022 </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={toMyGitLinkedin}>
            <LinkedInIcon color="primary" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={toMyGitHub}>
            <GitHubIcon color="secondary" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

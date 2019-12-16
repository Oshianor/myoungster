import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
  root: {
    // height: "90vh"
    backgroundColor: "#ffffff",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  AppBar: { backgroundColor: "white" },
  title: {
    flexGrow: 1,
    color: "#028cd6",
    fontWeight: "600"
  },
  img: {
    width: "100%",
    // height: 400
  },
  contact: {
    borderRadius: 20,
    backgroundColor: "#ff4e4e"
  },
  joint: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
}));

export default function SecondBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          spacing={16}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={8}>
            <img src="/static/Artboard-13.svg" className={classes.img} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" className={classes.title}>
              Attendance
            </Typography>
            <Typography>
              Youngster is a school Application that allow parents and teachers
              to jointly monitor the school activies of their pupils/children.
              It is available on mobile and web responsive screens.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";




const useStyles = makeStyles(theme => ({
  root: {
    height: "90vh",
    display: "flex",
    alignItems: "center"
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
    width: "100%"
  },
  img1: {
    width: 200,
    height: 400
  },
  img2: {
    width: 250,
    height: 420,
    marginLeft: -50
  },
  contact: {
    borderRadius: 20,
    backgroundColor: theme.palette.intermediate.main
  },
  joint: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  right: {
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: -120,
    marginTop: -20,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  left: {
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: -150,
    marginLeft: -150,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

export default function FirstBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.right}>
        <img 
          src="/static/Artboard-9.svg"
          // className={classes.rightImg} 
        />
      </div>
      <Container>
        <Grid
          container
          direction="row"
          spacing={16}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" className={classes.title}>
              YOUNGSTER
            </Typography>
            <Typography>
              Youngster is a school Application that allow parents and teachers
              to jointly monitor the school activies of their pupils/children.
              It is available on mobile and web responsive screens.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.contact}
            >
              Enroll Now
            </Button>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.joint}>
            {/* <div className={classes.joint}> */}
            <img src="/static/Artboard-1.svg" className={classes.img} />
            {/* <img src="/static/first.png" className={classes.img1} /> */}
            {/* <img src="/static/second.png" className={classes.img2} /> */}
            {/* </div> */}
          </Grid>
        </Grid>
      </Container>
      <div className={classes.left}>
        <img src="/static/Artboard-7.svg" />
      </div>
    </div>
  );
}

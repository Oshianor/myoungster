import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles(theme => ({
  root: {
    // height: "90vh"
    // backgroundColor: "#ffffff",
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
    height: 400
  },
  imgRoot: {
    display: "flex",
    justifyContent: "center"
  },
  contact: {
    borderRadius: 20,
    backgroundColor: "#ff4e4e"
  },
  joint: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  content: {
    width: 400,
    padding: 10,
    // boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      borderRadius: 10,
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
    }
  },
  contentRoot: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "flex-end"
  },
  contentRight: {
    width: 400,
    padding: 10,
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      borderRadius: 10,
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
    }
    // textAlign: "right"
  },
  contentMain: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  }
}));


export default function FourthBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          spacing={24}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <div className={classes.content}>
              <Typography variant="h6" className={classes.title}>
                Live News Feeds
              </Typography>
              <Typography>
                Youngster is a school Application that allow parents and
                teachers to jointly monitor the school activies of their
                pupils/children. It is available on mobile and web responsive
                screens.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.contentRoot}>
            <div className={classes.contentRight}>
              <Typography variant="h6" className={classes.title}>
                Time Table
              </Typography>
              <Typography>
                Youngster is a school Application that allow parents and
                teachers to jointly monitor the school activies of their
                pupils/children. It is available on mobile and web responsive
                screens.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.imgRoot}>
          <img src="/static/Artboard-2.svg" className={classes.img} />
        </div>
        <Grid
          container
          direction="row"
          spacing={16}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <div className={classes.content}>
              <Typography variant="h6" className={classes.title}>
                Attendance
              </Typography>
              <Typography>
                Youngster is a school Application that allow parents and
                teachers to jointly monitor the school activies of their
                pupils/children. It is available on mobile and web responsive
                screens.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.contentRoot}>
            <div className={classes.contentRight}>
              <Typography variant="h6" className={classes.title}>
                Child Location
              </Typography>
              <Typography>
                Youngster is a school Application that allow parents and
                teachers to jointly monitor the school activies of their
                pupils/children. It is available on mobile and web responsive
                screens.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <div className={classes.contentMain}>
          <div className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              Assignment
            </Typography>
            <Typography>
              Youngster is a school Application that allow parents and teachers
              to jointly monitor the school activies of their pupils/children.
              It is available on mobile and web responsive screens.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}

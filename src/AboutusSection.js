
import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundImage: "url('/static/about.jpg')",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // opacity: 0.5,
    // backgroundColor: "black"
  },

  aboutHeader: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
  },
  text: {
    padding: theme.spacing(0),
    // textAlign: 'center',
    color: 'white',
    
  },
  img: {
    margin: 'auto',
    height: 400
  },
  joint: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }

}));


export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.aboutHeader} >About Us</Typography>
        </Grid>
        <Grid item xs={6} className={classes.joint}>
          <img src="/static/Artboard-6.svg" alt="" className={classes.img}/>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.text} >
            Youngster is a school Application that allows parents and teachers to jointly
            moitor the school activities of the pupils/children. It is available on mobile and web
            responsive screens.
          </Typography>
          <Typography variant="h6" className={classes.text} >
            Youngster is a school Application that allows parents and teachers to jointly
            moitor the school activities of the pupils/children. It is available on mobile and web
            responsive screens.
          </Typography>
          <Typography variant="h6" className={classes.text} >
            Youngster is a school Application that allows parents and teachers to jointly
            moitor the school activities of the pupils/children. It is available on mobile and web
            responsive screens.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}


{/* <Typography>Seen enough? Interested Already? Get Started Today</Typography>; */}
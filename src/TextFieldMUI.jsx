import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box, Container, CssBaseline, Grid, Paper, GridList, GridListTile} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function ValidationTextFields() {
  const classes = useStyles();
  function formSubmit(e){
    // e.preventDefault();
  }
  return (
    <>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </div>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={formSubmit}>
      <div>
        <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
        <TextField
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
    );
}

const Demo = ()=>{
  return (<Button variant="contained" color="primary">Hello World</Button>);
}
const BoxCom = ()=>{
  return (
    <>
    <CssBaseline></CssBaseline>
    <Container maxWidth="sm" style={{backgroundColor:'red',paddingTop:'40px'}}>
      <Box component="div"> 
        <Demo/>
      </Box>
    </Container>
    <CssBaseline></CssBaseline>
    <Container maxWidth="xl" style={{backgroundColor:'yellow',paddingTop:'40px'}}>
      <Box component="div"> 
        <Demo/>
      </Box>
    </Container>
    <CssBaseline></CssBaseline>
    <Container style={{backgroundColor:'red',paddingTop:'40px'}} fixed>
      <Box component="div"> 
        <Demo/>
      </Box>
    </Container>
    </>
  );
}

const gridStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: Theme.spacing(2),
      textAlign: 'center',
      color: Theme.palette.text.secondary,
    },
  }),
);

const GridCom = ()=>{
  const classes = gridStyles();
  return (
    <>
      <div className={classes.root} style={{backgroundColor:'pink'}}>
        <Grid container direction="row-reverse" justify="center" alignItems="flex-end" spacing={3}>  
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>xs-12 md-6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs-6</Paper>
          </Grid>
          <Grid item xs={6} md={12}>
            <Paper className={classes.paper}>xs-6 md-12</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.paper}>xs-12  md-6 lg-3</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.paper}>xs-12  md-6 lg-3</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.paper}>xs-12  md-6 lg-3</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.paper}>xs-12  md-6 lg-3</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export {ValidationTextFields,Demo,BoxCom, GridCom};
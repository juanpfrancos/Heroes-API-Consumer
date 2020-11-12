import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


function Addhero(){

    const classes = useStyles();
    
    return(
      <>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField id="outlined-basic" label="Real" variant="outlined" />
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <Button variant="contained" color="primary">
            Guardar
          </Button>
        </form>
      </>
    );
}


export default Addhero;
import React from 'react';
import { Button, makeStyles, IconButton, Fab } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
const useStyles = makeStyles((theme)=>({
    root:{
        '& > *' : {
            margin : theme.spacing(1),
        },
    },
    buttonStyle:{
        padding:'25px',
    },
    input:{
        display:'none',
    },
    extendedIcon:{
        marginRight:theme.spacing(1),
    }
}));

const InputCom =( )=>{
    const classes = useStyles();
    const ButtonCom = ()=>{
        return(
            <>
                <div className={classes.root}>
                    <Button variant = "contained" >Default</Button>
                    <Button variant = "contained" color="primary" >Primary</Button>
                    <Button variant = "contained" color="secondary" disabled >Secondary</Button>
                    <Button variant = "contained" color="secondary" href="www.google.com" >Link</Button>
                    <Button variant = "contained" className={classes.buttonStyle} color="primary" >Primary</Button>
                    <Button variant = "contained" className={classes.buttonStyle} color="primary" disableElevation>Primary</Button>
                    <Button variant = "contained" className={classes.buttonStyle} color="primary" disableFocusRipple>Primary</Button>
                    <Button variant = "contained" className={classes.buttonStyle} color="primary" disableRipple>Primary</Button>
                </div>
                <div className={classes.root}>
                    <Button variant = "outlined" color="primary">Primary</Button>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                </div>
                <div className={classes.root}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                    <Fab variant="extended">
                        <NavigationIcon className={classes.extendedIcon} />
                        Navigate
                    </Fab>
                    <Fab disabled aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                </div>
            </>
        );
    }
    return(
        <>
            <h1>Input Components</h1>
            <ButtonCom></ButtonCom>
        </>
    );
}
export default InputCom;
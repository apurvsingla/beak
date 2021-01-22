/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useHistory,useLocation } from 'react-router-dom';
import { backSource } from '../Source/Source';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
import axios from 'axios';
import useSessionStorage from '../SessionStorage/SessionStorage';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: '#fafafa',
      backgroundColor: '#FE818D',
      cursor: 'pointer'
    },
  }));

const ModeComponent = () => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const [data,setData] = useSessionStorage('data', null);
    const [imageData,setImageData] = useSessionStorage('image-data', null);

    React.useEffect(() => {
        if(location.pathname === '/fan'){
        axios.get(`http://localhost:8000/fanData`).then(res => setData(res.data));
        }else if(location.pathname === '/lamp'){
        axios.get(`http://localhost:8000/lampData`).then(res => setData(res.data));
        }else{
        axios.get(`http://localhost:8000/pianoData`).then(res => setData(res.data));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [normalImg, setNormalImg] = useSessionStorage('normal-img', []);

    const nextPage = (index,i) => {
        history.push(`${history.location.pathname}/${index}`);
        setImageData(i.normalImg);
        setNormalImg([]);
    }

    const back = () => {
        history.goBack();
    }

    return (
        <>
        <img 
        src={backSource}
        alt="back-source"
        onClick={() => back()}
        style={{position: 'absolute', left: '0', cursor: 'pointer'}}
        />
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={4}
            style={{width:"90vw", marginLeft: '10vw', marginTop: '10vh'}}
            > 
        {data ? data.map((i,index) => {
            return(
            <div className={classes.root}>
             <Grid item xs={6}
                 key={index}>
               <Paper className={classes.paper} onClick={() => nextPage(index,i)}>
                   <span>{index}</span>
               </Paper>
             </Grid>
            </div>)
        }): <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        style={{ zIndex: '5000000000',
        position: 'absolute', top: '25%', left: '50%'}}
     /> }
        </Grid>
        </>
    );
}

export default ModeComponent;

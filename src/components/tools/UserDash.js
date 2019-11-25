import React, { useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { idTools, idReqTools } from '../../actions/toolActions'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import OwnedTools from './OwnedTools'
import RequestedTools from './RequestedTools'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const UserDash = (props) => {
  const classes = useStyles();


    useEffect(() => {
        props.idTools()
        props.idReqTools()
    }, [])

  return (
    <>
        <Link to='/toollist'>Temporary link to ToolList</Link>
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={20}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <RequestedTools props={props.reqTData} />
          </Grid>
        </Grid>
    </>
  );
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    idOTools: state.idTools,
    reqTData: state.reqTData
  });
  
export default withRouter(connect(mapStateToProps, { idTools, idReqTools })(UserDash))
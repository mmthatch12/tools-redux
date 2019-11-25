import React, { useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { idTools, idReqTools } from '../../actions/toolActions'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import OwnedTools from './OwnedTools'
import RequestedTools from './RequestedTools'

const UserDash = (props) => {

    useEffect(() => {
        props.idTools()
        props.idReqTools()
    }, [])

  return (
    <>
        <Link to='/toollist'>Temporary link to ToolList</Link>
        <Grid container>
          <Grid item sm>
            <OwnedTools props={props.idOTools} />
          </Grid>
          <Grid item sm>
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
import React, { useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { idTools } from '../../actions/toolActions'

import OwnedTools from './OwnedTools'

const UserDash = (props) => {

    useEffect(() => {
        props.idTools()
    }, [])

  return (
    <>
        <Link to='/toollist'>Temporary link to ToolList</Link>
        <OwnedTools props={props.idOTools} />
    </>


  );
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    idOTools: state.idTools
  });
  
export default withRouter(connect(mapStateToProps, { idTools })(UserDash))
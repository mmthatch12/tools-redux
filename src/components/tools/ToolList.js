import React, { useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { availableTools } from '../../actions/toolActions'
import { getThemeProps } from '@material-ui/styles';

const ToolList = (props) => {

    useEffect(() => {
        props.availableTools()
    }, [])

    return (
        <>
            {props.tools.map(tool => <div>{tool.name}</div>)}
        </>
        
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    tools: state.tools
  });
  
  export default withRouter(connect(mapStateToProps, { availableTools })(ToolList))
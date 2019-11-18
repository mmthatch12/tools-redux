import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { availableTools } from '../../actions/toolActions'

const ToolList = (props) => {
    const[test, setTest] = useState([])

    // const handleClick = e => {
    //     e.preventDefault()
    //     props.availableTools()
    // }

    useEffect(() => {
        props.availableTools()
    }, [])

    console.log('***props from ToolList', props.tools)

    return (
        <>
            <div>Not working yet?</div>
            {props.tools && props.tools.map(tool => tool.value.map((tooly, ind) => <div key={ind}>{tooly.name}</div>))}
        </>
        
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    tools: state.tools
  });
  
  export default withRouter(connect(mapStateToProps, { availableTools })(ToolList))
import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editTool } from '../../actions/toolActions'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EditTool = (props) => {
    const classes = useStyles()
    const id = localStorage.getItem('id')
    const [tool, setTool] = useState({ name: '', owner_id: id })

    const handleSubmit = e => {
        e.preventDefault()
        return props.editTool(tool)
        .then(res => {
          if(res) {
            props.history.push('/toollist')
          }
        })
        .catch(err => {
          console.log('Add tool error', err)
        })
      }

    const handleChange = e => {
        e.preventDefault()
        setTool({ ...tool, [e.target.name]: e.target.value})
    }

    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add Tool
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    name="name"
                    placeholder='Tool Name'
                    value={tool.name}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                 Tool
              </Button>
            </form>
          </div>
        </Container>
      </>

        
    )
}

const mapStateToProps = state => ({
    isLoading: false,
    editTools: state.editTools
  });
  
  export default withRouter(connect(mapStateToProps, { editTool })(EditTool))
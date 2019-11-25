import React, { useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const UserDash = (props) => {
  const classes = useStyles();

    // useEffect(() => {
    //     props.availableTools()
    // }, [])

  return (
    <>
        <Link to='/toollist'>Temporary link to ToolList</Link>
        {props.tools && props.tools.map(tool => tool.value.map((tooly, ind) => (        
            <Card className={classes.card} key={ind}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Tool: Practice
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Owner: Practice
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>)
        ))}

    </>


  );
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    tools: state.tools
  });
  
export default withRouter(connect(mapStateToProps, {  })(UserDash))
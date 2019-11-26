import React from 'react';
import { Link } from 'react-router-dom'

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

const OwnedTools = (props) => {
  const classes = useStyles();

  console.log('props from OwnedTools', props)

  return (
    <>
        Tools I own
        {props.props && props.props.map(tool => tool.value.map((tooly, ind) => (        
           <Card className={classes.card} key={ind}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Tool: {tooly.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Owner: {tooly.first_name} {tooly.last_name}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Edit Tool
                    </Button>
                </CardActions>
            </Card>)
        ))}
    </>
  );
}
  
export default OwnedTools
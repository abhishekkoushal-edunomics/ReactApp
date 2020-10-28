import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

const tileData = [
    {
      img: "https://material-ui.com/static/images/grid-list/bike.jpg",
      title: 'Bike',
      author: 'author',
      cols: 2,
    },
    {
     img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
     title: 'Breakfast',
     author: 'author',
     cols: 1,
   },
   {
     img: "https://material-ui.com/static/images/grid-list/camera.jpg",
     title: 'Camera',
     author: 'author',
     cols: 1,
   },
   {
     img: "https://material-ui.com/static/images/grid-list/hats.jpg",
     title: 'Hats',
     author: 'author',
     cols: 2,
   },
   {
       title: 'Honey',
     img: "https://material-ui.com/static/images/grid-list/honey.jpg",
     author: 'author',
     cols: 2,
   },
   {
     img: "https://material-ui.com/static/images/grid-list/morning.jpg",
     title: 'Morning',
     author: 'author',
     cols: 1,
   },
   {
     img: "https://material-ui.com/static/images/grid-list/olive.jpg",
     title: 'Olive',
     author: 'author',
     cols: 1,
   },
   {
     img: "https://material-ui.com/static/images/grid-list/plant.jpg",
     title: 'Plant',
     author: 'author',
     cols: 1,
   },
   {
     img: "https://material-ui.com/static/images/grid-list/vegetables.jpg",
     title: 'Vegetables',
     author: 'author',
     cols: 1,
   }
  ];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} cols={3}>
        {tileData.map((tile) => (
          <GridListTile style={{height:'350'}} key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
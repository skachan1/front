import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Post({ post }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={post.image}
        alt="post image"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="p">
          {post.title}
        </Typography>
        <Typography gutterBottom variant="h5" color="text.secondary">
          {post.text}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {post.tags}
        </Typography>
        <Typography variant="h3" color="text.primary">
          {post.user.username}
        </Typography>
      </CardContent>
    </Card>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    tags: PropTypes.string,
    user: PropTypes.shape(
      {
        username: PropTypes.string.isRequired,
      },
    ).isRequired,
  }).isRequired,
};

export default memo(Post);

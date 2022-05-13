import React from 'react';

const CommentCard = ({comment}) => {
  return (
    <div>
      <h4>@{comment.commentAuthor}</h4>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentCard;

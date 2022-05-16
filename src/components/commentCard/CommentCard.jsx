import React from 'react';
import './commentCard.scss'

const CommentCard = ({comment}) => {
  return (
    <div className='commentCard'>
      <h4>@{comment.commentAuthor}</h4>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentCard;

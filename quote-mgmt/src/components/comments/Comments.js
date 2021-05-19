import { useCallback, useEffect, useState } from 'react';
import { getComments } from 'api/comments';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useRequest from 'hooks/useRequest';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    data: loadedComments,
    isLoading,
    run: loadComments,
  } = useRequest(getComments);

  const { quoteId } = props;
  useEffect(() => {
    loadComments(quoteId);
  }, [quoteId, loadComments]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    loadComments(quoteId);
  }, [quoteId, loadComments]);

  let comments = null;
  if (isLoading) {
    comments = <LoadingSpinner />;
  }

  if (loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (!loadedComments || loadedComments.length === 0) {
    comments = (
      <div className="centered">
        <p>No comments</p>
      </div>
    );
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={props.quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;

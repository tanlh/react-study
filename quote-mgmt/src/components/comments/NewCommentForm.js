import useRequest from 'hooks/useRequest';
import { useEffect, useRef } from 'react';
import { addComment } from 'api/comments';

import classes from './NewCommentForm.module.css';
import LoadingSpinner from 'components/UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { isLoading, run: submitComment } = useRequest(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (!isLoading) {
      onAddedComment();
    }
  }, [isLoading, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    submitComment({
      text: commentTextRef.current.value,
      quoteId: props.quoteId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {isLoading && <LoadingSpinner />}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;

import { useState, useContext, useEffect } from 'react';

import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      feedbackEdit.edit
        ? updateFeedback(feedbackEdit.item.id, newFeedback)
        : addFeedback(newFeedback);
    }
    setText('');
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='write a review'
            value={text}
          />
          <Button type='submit' isDisabled={text.length < 10}>
            {feedbackEdit.edit ? 'Update' : 'Send'}
          </Button>
        </div>
        <p className='text-center message'>
          {text !== '' && text.length <= 10
            ? 'Enter a minimum of 10 chars'
            : ''}
        </p>
      </form>
    </Card>
  );
};
export default FeedbackForm;

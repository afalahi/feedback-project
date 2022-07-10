import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeedbackData from '../data/feedback';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback(prev => [newFeedback, ...prev]);
  };

  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setFeedbackEdit(prev => !prev.edit)
  };
  const deleteFeedback = id => {
    setFeedback(feedback.filter(item => item.id !== id));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

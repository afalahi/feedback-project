import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const res = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    );
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };
  const addFeedback = async newFeedback => {
    const res = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback(prev => [data, ...prev]);
  };

  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = async (id, updatedItem) => {
    const res = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await res.json()
    setFeedback(
      feedback.map(item =>
        item.id === id ? { ...item, ...data } : item
      )
    );
    setFeedbackEdit(prev => !prev.edit);
  };
  const deleteFeedback = async id => {
    setFeedback(feedback.filter(item => item.id !== id));
    await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'DELETE',
    });
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

import FeedbackStats from '../FeedbackStats';
import FeedbackList from '../FeedbackList';
import FeedbackForm from '../FeedbackForm';

const Home = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  );
};
export default Home;

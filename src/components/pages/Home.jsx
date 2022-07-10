import FeedbackStats from '../FeedbackStats';
import FeedbackList from '../FeedbackList';
import FeedbackForm from '../FeedbackForm';
import AboutIcon from '../AboutIcon';

const Home = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <AboutIcon />
    </>
  );
};
export default Home;

import { Route, Routes } from 'react-router-dom';
import AboutIcon from './AboutIcon'

import Header from './Header';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <div className='container content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <AboutIcon />
    </>
  );
};

export default App;

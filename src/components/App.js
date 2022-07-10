import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

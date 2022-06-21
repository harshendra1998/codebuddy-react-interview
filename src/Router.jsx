import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstform from './pages/firstform';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Secondform from './pages/secondform';
import Thirdform from './pages/thirdform';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/first" element={<Firstform />} />
      <Route path="/second" element={<Secondform />} />
      <Route path="/third" element={<Thirdform />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

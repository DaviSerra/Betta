import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Layout from './Layout';
import Origin from './pages/origin/Origin';
import Facts from './pages/facts/Facts';


function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/origin" element={<Origin />} />
        <Route path="/facts" element={<Facts />} />
      </Route>
    </Routes>
  );
}

export default Router;
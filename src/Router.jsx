import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './pages/First';
import Home from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
      </Routes>
    </BrowserRouter>
  );
}

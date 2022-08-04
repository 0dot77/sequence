import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './pages/First';
import FirstPopUpModal from './components/first-popup-modal';
import Home from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
        {/* 아래는 first의 팝업 창 */}
        <Route path="1" element={<FirstPopUpModal />} />
        <Route path="2" element={<FirstPopUpModal />} />
        <Route path="3" element={<FirstPopUpModal />} />
        <Route path="4" element={<FirstPopUpModal />} />
        <Route path="5" element={<FirstPopUpModal />} />
        <Route path="6" element={<FirstPopUpModal />} />
      </Routes>
    </BrowserRouter>
  );
}

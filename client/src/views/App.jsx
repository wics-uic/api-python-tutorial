import { BrowserRouter, Routes, Route } from "react-router-dom";
import Public from './Public';
import WiCSTrivia from './WiCSTrivia';
import LandingPage from './Landing';

// Routes to navigate between pages - App holds all my routes and / is the default path
// So when I go to localhost:/ landing page is the first component that comes up 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/public" element={<Public/>}/>
        <Route path="/wics-trivia" element={<WiCSTrivia/>}/>
      </Routes>
    </BrowserRouter>
  );
}

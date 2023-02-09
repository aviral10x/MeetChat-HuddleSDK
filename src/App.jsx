import './App.css';
import Home from './home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Match from './match'
import Meeting from './meeting'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/meeting" caseSensitive={false} element={<Meeting />} />
          <Route path="/match" caseSensitive={false} element={<Match />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

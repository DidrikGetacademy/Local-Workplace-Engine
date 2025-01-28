
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Css/App.css'
import Mainpage from './Mainpage';;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

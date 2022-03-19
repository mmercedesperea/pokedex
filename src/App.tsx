import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokemon/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

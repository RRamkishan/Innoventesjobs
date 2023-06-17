import './App.css';
import Login from './pages/login';
import Planet from './pages/planet';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <h1>Star Wars</h1>
      {/* {window.location.pathname.includes('/planet') && <Planet />}
      {window.location.pathname === '/' && <Login />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/planet" element={<Planet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

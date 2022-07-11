import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;

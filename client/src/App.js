import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import SearchJobs from './Pages/SearchJobs';
import Footer from './Components/Footer';
import SearchCompaniesPage from './Pages/SearchCompaniesPage';
import NotFound from './Components/404';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <div className="App"></div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/company' element={<SearchCompaniesPage></SearchCompaniesPage>}></Route>
        <Route path='/login' element={<Home></Home>}></Route>
        <Route path='/register' element={<Home></Home>}></Route>
        <Route path='/search' element={<SearchJobs></SearchJobs>}></Route>
        <Route Component={NotFound} />
      </Routes>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;

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
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<SearchCompaniesPage />} />
          <Route path='/login' element={<Home />} />
          <Route path='/register' element={<Home />} />
          <Route path='/search' element={<SearchJobs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

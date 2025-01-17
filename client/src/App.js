import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import ResourcesPage from './components/ResourcesPage';
import FinancialNews from './components/FinancialNews.jsx';
// import Page3 from './components/Page3';
// import Page4 from './components/Page4';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/ResourcesPage" element={<ResourcesPage/>} />
        <Route path="/ResourcesPage/FinancialNews" element={<FinancialNews/>} />
       {/*  <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} /> */}
        </Routes>
    </Router>
  );
}

export default App;

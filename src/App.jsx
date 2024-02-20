import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
//import NotFound from './components/NotFound';
import { Helmet } from 'react-helmet';

function App() {
    return (
        <div>
            <Helmet>
                <title>Patchker</title>
            </Helmet>
        <Router>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
//import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import MapView from './MapView';
import ProtectedRoute  from './ProtectedRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />  
                <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
                <Route path="/map/:mapId" element={<ProtectedRoute> <MapView /> </ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;

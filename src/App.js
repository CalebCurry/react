import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';

function App() {
    return (
        <Header>
            <BrowserRouter>
                <Routes>
                    <Route path="/employees" element={<Employees />} />

                    <Route path="/customers" element={<Customers />} />
                </Routes>
            </BrowserRouter>
        </Header>
    );
}

export default App;

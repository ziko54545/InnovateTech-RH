import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import LoadingTransition from './pages/LoadingTransition';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router>
                    <Toaster
                        position="top-center"
                        toastOptions={{
                            duration: 4000,
                            style: {
                                background: 'rgba(15, 23, 42, 0.95)',
                                color: '#fff',
                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                borderRadius: '16px',
                                padding: '16px 20px',
                                fontSize: '15px',
                                fontWeight: '500',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(6, 182, 212, 0.1)',
                                backdropFilter: 'blur(10px)',
                                minWidth: '350px',
                            },
                            success: {
                                iconTheme: {
                                    primary: '#10b981',
                                    secondary: '#fff',
                                },
                                style: {
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                },
                            },
                            error: {
                                iconTheme: {
                                    primary: '#ef4444',
                                    secondary: '#fff',
                                },
                                style: {
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                },
                            },
                        }}
                    />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/loading" element={<ProtectedRoute><LoadingTransition /></ProtectedRoute>} />
                        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/employees" element={<EmployeeList />} />
                            <Route path="/employees/new" element={<EmployeeForm />} />
                            <Route path="/employees/edit/:id" element={<EmployeeForm />} />
                            <Route path="/employees/:id" element={<EmployeeDetails />} />
                        </Route>
                    </Routes>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;

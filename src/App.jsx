import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CoursesPage from './pages/CoursesPage';
import TestsPage from './pages/TestsPage';
import AssignmentsPage from './pages/AssignmentsPage';
import DiscussionPage from './pages/DiscussionPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import LoginPage from './pages/LoginPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/discussion" element={<DiscussionPage />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

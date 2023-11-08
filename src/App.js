// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, useRoutes } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import { route, routes} from "react-router";

function App() {
  return (
    <Router>
      <routes>
        <route exact path="/" component={CourseListing} />
        <route path="/courses/:id" component={CourseDetails} />
        <route path="/dashboard" component={StudentDashboard} />
      </routes>
    </Router>
  );
}

export default App;

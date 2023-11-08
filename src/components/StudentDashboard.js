// src/components/StudentDashboard.js
import React from 'react';
import { connect } from 'react-redux';


function StudentDashboard({ enrolledCourses }) {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    enrolledCourses: state.courses.courses.filter((c) => c.completed),
  };
};

export default connect(mapStateToProps)(StudentDashboard);

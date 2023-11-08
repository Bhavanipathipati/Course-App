// src/components/CourseListing.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../redux/actions/courseActions';

function CourseListing({ courses, fetchCourses }) {
  return (
    <div>

      <button onClick={fetchCourses}>Fetch Courses</button>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courses,
  };
};

export default connect(mapStateToProps, { fetchCourses })(CourseListing);

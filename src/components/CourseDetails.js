// src/components/CourseDetails.js
import React from 'react';
import { connect } from 'react-redux';
import { markCourseCompleted } from '../redux/actions/courseActions';

function CourseDetails({ course, markCourseCompleted }) {
  return (
    <div>
      <h1>{course.name}</h1>
      <p>Instructor: {course.instructor}</p>
      {/* Display other course details here */}
      <button onClick={() => markCourseCompleted(course.id)}>Mark as Completed</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const courseId = parseInt(ownProps.match.params.id, 10);
  return {
    course: state.courses.courses.find((c) => c.id === courseId),
  };
};

export default connect(mapStateToProps, { markCourseCompleted })(CourseDetails);

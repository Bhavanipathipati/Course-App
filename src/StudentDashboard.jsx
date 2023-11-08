import React from 'react';

const StudentDashboard = ({ enrolledCourses }) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <img src={course.thumbnail} alt={course.name} />
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <div>Progress: (ProgressBar Component)</div>
            <button onClick={() => markCourseCompleted(course.id)}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;

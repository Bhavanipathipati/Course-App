// src/redux/actions/courseActions.js
export const fetchCourses = () => {
    return {
      type: 'FETCH_COURSES',
    };
  };
  
  export const markCourseCompleted = (courseId) => {
    return {
      type: 'MARK_COURSE_COMPLETED',
      payload: courseId,
    };
  };
  
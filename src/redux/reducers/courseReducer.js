// src/redux/reducers/courseReducer.js
const initialState = {
    courses: [], // Initial state for courses
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES':
        // Logic to fetch and update the list of courses
        return { ...state, courses: action.payload /* updated course data */ };
      case 'MARK_COURSE_COMPLETED':
        // Logic to mark a course as completed
        return {
          ...state,
          courses: state.courses.map((course) =>
            course.id === action.payload
              ? { ...course, completed: true }
              : course
          ),
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  
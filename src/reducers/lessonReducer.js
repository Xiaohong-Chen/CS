const initialState = {
    lessons:[],
    moduleId:""
}

const lessonReducer = (state = initialState, action) => {
   switch (action.type) {
       case "FIND_LESSONS_FOR_MODULE":
           return {
               ...state,
               lessons: action.lessons,
               moduleId: action.moduleId
           }
       case "EDIT_LESSON":
           return {
               ...state,
               lessons: state.lessons.map(lesson => lesson._id !== action.lesson._id ? lesson: action.lesson )
           }
       case "DELETE_LESSON":
           return {
               ...state,
               lessons: state.lessons.filter(lesson => lesson._id != action.lesson._id)
           }
       case "CREATE_LESSON_FOR_MODULE":
           return {
               ...state,
               lessons: [
                   ...state.lessons,
                   action.lesson
               ]
           }
       default:
           return state;
   }
}

export default lessonReducer
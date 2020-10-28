import LessonTabsComponent from "../components/LessonTabsComponent";
import {connect} from "react-redux"
import LessonService from "../services/LessonService";

const stateToPropsMapper = (state) => {
    return ({
        lessons: state.lessonReducer.lessons,
        moduleId: state.lessonReducer.moduleId,
        course:state.courseReducer.course
    })
}

const dispatchToPropsMapper = (dispatch) => {
    return ({
        editLesson: (lesson) => dispatch({type: "EDIT_LESSON", lesson}),

        updateLesson: (lesson) => LessonService.updateLesson(lesson)
            .then(status => dispatch({type: "EDIT_LESSON", lesson})),

        deleteLesson: (lesson) => LessonService.deleteLesson(lesson._id)
            .then(status => dispatch({type: "DELETE_LESSON", lesson})),

        createLessonForModule: (moduleId) => LessonService.createLessonForModule(moduleId, {title: "COOL Lesson"})
            .then(actualLesson => dispatch({type: "CREATE_LESSON_FOR_MODULE", lesson: actualLesson}))
    })
}


export default connect(stateToPropsMapper, dispatchToPropsMapper)(LessonTabsComponent)

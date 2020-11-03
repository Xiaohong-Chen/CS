import React from "react";
import CourseEditorComponent from "../components/CourseEditorComponent";
import {connect} from "react-redux";
import ModuleService from "../services/ModuleService";
import CourseService from "../services/CourseService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";
import WidgetService from "../services/WidgetService";

const stateToPropsMapper = (state) => {
    return (
        {
            modules: state.moduleReducer.modules,
            course: state.courseReducer.course,
            widgets: state.widgetReducer.widgets,
            currentOrder: state.widgetReducer.currentOrder
        }
    )
}

const dispatchToPropsMapper = (dispatch) => {
    return (
        {
            //Get Current Page Course by id
            // 1. use findCourseById(courseId) in CourseService to get Current Course
            // 2. use dispatch() to invoke courseReducer to update course object state in courseReducer
            // 3. get course state from store using state.courseReducer.course
            findCourseById: (courseId) => CourseService.findCourseById(courseId)
                .then(course => dispatch({type: "FIND_COURSE_BY_ID", course}))
            ,

            //Get modules by courseId
            //  1. use findModulesForCourse(courseId) in ModuleService to get modules
            //  2. use dispatch() to invoke moduleReducer to update modules object state in moduleReducer
            //  3. get modules state from store using state.moduleReducer.modules
            findModulesForCourse: (courseId) => ModuleService.findModulesForCourse(courseId)
                .then(modules => dispatch({type: "FIND_MODULES_FOR_COURSE", modules}))
            ,

            findLessonsForModule: (moduleId) => LessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch({type: "FIND_LESSONS_FOR_MODULE", lessons, moduleId}))
            ,

            findTopicsForLesson: (lessonId) => TopicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({type: "FIND_TOPICS_FOR_LESSON", topics, lessonId}))

            ,
            findWidgetsForTopic: (topicId) => WidgetService.findWidgetsForTopic(topicId)
                .then(widgets => dispatch({type: "FIND_WIDGETS_FOR_TOPIC", widgets,topicId}))

        }
    )
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(CourseEditorComponent);
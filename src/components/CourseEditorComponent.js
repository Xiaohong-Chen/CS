import React, {Component} from "react";

import ModuleListContainer from "../containers/ModuleListContainer";
import LessonTabsContainer from "../containers/LessonTabsContainer";
import TopicPillsContainer from "../containers/TopicPillsContainer";
import WidgetListComponent from "./WidgetListComponent";
import WidgetListContainer from "../containers/WidgetListContainer";


class CourseEditorComponent extends Component {


    componentDidMount() {

        //Get courseId using props.match.params.
        const courseId = this.props.match.params.courseId
        //console.log("couurseid", courseId)

        this.props.findCourseById(courseId)
        //console.log("course:", this.props.course)

        this.props.findModulesForCourse(courseId)
        // console.log("Modules:",this.props.modules)

        const moduleId = this.props.match.params.moduleId
        //console.log("moduleId", moduleId)

        const lessonId = this.props.match.params.lessonId

        const topicId = this.props.match.params.topicId


        if (moduleId) {
            this.props.findLessonsForModule(moduleId)
        }

        if (lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }

        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        if (moduleId !== prevProps.match.params.moduleId) {
            if (moduleId) {
                this.props.findLessonsForModule(moduleId)
            }
        }
        const lessonId = this.props.match.params.lessonId
        if (lessonId !== prevProps.match.params.lessonId){
            if(lessonId){
                this.props.findTopicsForLesson(lessonId)
            }
        }

        const topicId = this.props.match.params.topicId
        if (topicId !== prevProps.match.params.topicId) {
            this.props.findWidgetsForTopic(topicId)
        }

        const currentOrder = this.props.currentOrder

        if(currentOrder != prevProps.currentOrder){
            this.props.findWidgetsForTopic(topicId)
        }

    }

    render() {
        return (
            <div>
                <h1>Course Editor {this.props.course.title}  </h1>
                {/*<h2>{this.props.course.title}</h2>*/}


                <div className="row">
                    <div className="col-4">
                        <ModuleListContainer/>
                    </div>

                    <div className="col-8">
                        <LessonTabsContainer/>
                        <TopicPillsContainer/>

                        <WidgetListContainer/>

                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditorComponent



import React, {Component} from "react";

import ModuleListComponent from "../containers/ModuleListContainer";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListContainer from "../containers/ModuleListContainer";
import LessonTabsContainer from "../containers/LessonTabsContainer";
import TopicPillsComponent from "./TopicPillsComponent";
import TopicPillsContainer from "../containers/TopicPillsContainer";


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

        if (moduleId) {
            this.props.findLessonsForModule(moduleId)
        }

        const lessonId = this.props.match.params.lessonId
        if (lessonId) {
            this.props.findTopicsForLesson(lessonId)
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
                        <div className="my-5">
                            <TopicPillsContainer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditorComponent



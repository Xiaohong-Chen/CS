import React from "react";
import {findAllCourses, deleteCourse, createCourse, updateCourse} from "../services/CourseService";
import {BrowserRouter, Route} from "react-router-dom"
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import NavigationComponent from "./NavigationComponent";
import CourseEditorContainer from "../containers/CourseEditorContainer";


class CourseManager extends React.Component {

    state = {
        courses: []
    }

    componentDidMount() {
        this.findAllCourse()
    }

    findAllCourse = () => {
        findAllCourses()
            .then(courses => {
                this.setState({courses: courses})
            })
    }
    addCourse = (course) => {

        createCourse(course)
            .then(addedCourse => {
                this.setState(preState => {
                    return (
                        {courses: [...preState.courses, addedCourse]}
                    )
                })
            })
    }

    deleteCourse = (courseid) => {
        deleteCourse(courseid)
            .then(status => {
                this.setState(preState => {
                    return (
                        {courses: preState.courses.filter(c => c._id !== courseid)}
                    )
                })
            })
    }

    editCourse = (courseid, course) => {
        updateCourse(courseid, course)
            .then(status => {
                this.findAllCourse()
            })
    }

    render() {

        return (
            <BrowserRouter courses={this.state.courses}>

                <div className="mx-auto" style={{width: '80%'}}>
                    <NavigationComponent addCourse={this.addCourse}/>
                    <Route path="/" exact>
                        <CourseTableComponent courses={this.state.courses} deleteCourse={this.deleteCourse}
                                              editCourse={this.editCourse}/>
                    </Route>
                    <Route path="/courseTable">
                        <CourseTableComponent courses={this.state.courses} deleteCourse={this.deleteCourse}
                                              editCourse={this.editCourse}/>
                    </Route>
                    <Route path="/courseGrid" exact>
                        <CourseGridComponent courses={this.state.courses} deleteCourse={this.deleteCourse}
                                             editCourse={this.editCourse}/>
                    </Route>
                    <Route path={
                        ["/courseEditor/:courseId",
                            "/courseEditor/:courseId/modules/:moduleId",
                            "/courseEditor/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courseEditor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                           exact component={CourseEditorContainer}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default CourseManager;
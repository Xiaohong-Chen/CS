import React, {Component} from "react";
import {findCourseById} from "../services/CourseService";

class CourseEditorComponent extends Component {

    state = {
        course: {}
    }

    componentDidMount() {
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({course: actualCourse}))
    }

    render() {
        return (
            <div>
                <h1>Course Editor </h1>
                <h2>{this.state.course.title}</h2>
            </div>
        )
    }
}

export default CourseEditorComponent
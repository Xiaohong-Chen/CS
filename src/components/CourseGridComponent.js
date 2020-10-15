import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import {Link} from "react-router-dom";

class CourseGridComponent extends React.Component {

    render() {
        return (
            <div className="bg-light">
                <div className="row p-4">
                    <div className="col-6">
                        <h4>Recent Document</h4>
                    </div>
                    <div className="col-3">
                        <h4>Owned By Me</h4>
                    </div>

                    <div className="col-1">
                        <i className="fa fa-sort-alpha-asc fa-2x"/>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-folder fa-2x"/>
                    </div>
                    <div className="col-1">
                        <Link to="/courseTable"><i className="fa fa-list fa-2x float-right text-dark"></i></Link>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">

                        {this.props.courses.map((course, index) =>
                            <div className="p-3">
                                <CourseCardComponent course={course} deleteCourse={this.props.deleteCourse} editCourse={this.props.editCourse}/>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        )
    }
}

export default CourseGridComponent;
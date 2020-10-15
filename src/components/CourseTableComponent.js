import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {Link} from "react-router-dom";

class CourseTableComponent extends React.Component {

    state = {
        selectedCourse: {}
    }

    render() {
        console.log("this.props", this.props)
        return (
            <div>

                <div className="table-responsive-">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th width="40%">Title</th>
                            <th width="20%">Owned By</th>
                            <th width="20%">Last Modified</th>
                            <th width="20%">
                                <Link to={"/courseGrid"}>
                                    <i className="fa fa-th fa-2x mx-2 float-right text-dark"/>
                                </Link>
                                <i className="fa fa-sort-alpha-asc fa-2x mx-2 float-right"></i>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.courses.map((course, index) =>
                                <CourseRowComponent course={course} index={index} deleteCourse={this.props.deleteCourse}
                                                    editCourse={this.props.editCourse}/>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CourseTableComponent;
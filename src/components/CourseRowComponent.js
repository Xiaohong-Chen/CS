import React from "react";
import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {

    state = {
        selected: false,
        editCourse: this.props.course
    }

    selectCourse = () => {
        this.setState({selected: !this.state.selected})
    }

    render() {
        return (

            <tr className={this.state.selected === true ? "table-primary" : ""}>
                {
                    !this.state.selected &&
                    <td>
                        <Link to={`/courseEditor/${this.props.course._id}`}>{this.props.course.title}</Link>

                    </td>
                }
                {
                    this.state.selected &&
                    <td>
                        <input className="form-control "

                               onChange={
                                   (e) => {
                                       const newTitle = e.target.value
                                       this.setState(preState => (
                                               {editCourse: {...preState.editCourse, title: newTitle}}
                                           )
                                       )
                                   }
                               }
                               value={this.state.editCourse.title}
                        />
                    </td>
                }
                <td>
                    {this.props.course.owner}
                </td>
                <td>
                    {this.props.course.modified}
                </td>
                <td>
                    <div>

                        {
                            !this.state.selected &&
                            <div>
                                <i className="fa fa-pencil fa-2x mx-2 float-right" onClick={this.selectCourse}/>
                                <i className="fa fa-trash fa-2x mx-2 float-right" onClick={() => {
                                    this.props.deleteCourse(this.props.course._id)
                                }}/>
                            </div>

                        }
                        {
                            this.state.selected &&
                            <div>
                                <i className="fa fa-check-circle fa-2x mx-2 float-right" onClick={() => {

                                    this.props.editCourse(this.props.course._id, this.state.editCourse)
                                    this.selectCourse()
                                }}/>

                            </div>

                        }

                    </div>


                    {/* <button
                            className="btn btn-danger "
                            onClick={() => this.props.deleteCourse(this.props.course)}>
                            Delete
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.setState({editing: true})}>
                            Edit
                        </button>*/}
                </td>
            </tr>

        )
    }
}

export default CourseRowComponent;
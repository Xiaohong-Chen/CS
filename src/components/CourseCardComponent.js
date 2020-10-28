import React from "react";
import {Link} from "react-router-dom";


class CourseCardComponent extends React.Component {

    state = {
        selected: false,
        editCourse: this.props.course
    }

    selectCourse = () => {
        this.setState({selected: !this.state.selected})
    }

    render() {
        return (

            <div className="card">
                <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."/>
                <div className="card-body">
                    {
                        !this.state.selected &&
                        <Link to={`/courseEditor/${this.props.course._id}`}>
                            <h5 className="card-title text-info">{this.props.course.title}</h5>
                        </Link>
                    }
                    {
                        this.state.selected &&

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

                    }

                    {
                        !this.state.selected &&
                        <p className="card-text">
                            <i className="fa fa-trash m-1 float-right" onClick={() => {
                                this.props.deleteCourse(this.props.course._id)
                            }}/>
                            <i className="fa fa-pencil m-1 float-right" onClick={this.selectCourse}/>
                        </p>

                    }
                    {
                        this.state.selected &&
                        <p className="card-text">
                            <i className="fa fa-check-circle m-1 float-right" onClick={() => {

                                this.props.editCourse(this.props.course._id, this.state.editCourse)
                                this.selectCourse()
                            }}/>

                        </p>

                    }


                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        Last updated {this.props.course.modified}
                    </small>
                </div>
            </div>
        )
    }
}

export default CourseCardComponent;
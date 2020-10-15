import React from "react";

class NavigationComponent extends React.Component {

    state = {
        defaultAddedCourse : {
            title: "New Course",
            owner: "me",
            modified: new Date().toDateString()
        }
    }


    render() {
        return (

            <nav className="navbar  row">
                <div class="col-md-1 text-info">
                    <i className="fa fa-bars fa-2x " href="#"/>
                </div>
                <div className="col-md-3 text-info">
                    <h2>Course Manager</h2>
                </div>
                <div className="col-md-7  ">
                    <input className="form-control"
                           placeholder="New Course"
                           onChange={
                               (e) => {
                                   const newTitle = e.target.value
                                   this.setState(preState => (
                                           {defaultAddedCourse: {...preState.defaultAddedCourse, title: newTitle}}
                                       )
                                   )
                               }
                           }
                    />
                </div>
                <div className="col-md-1 ">
                    <i className="fa fa-plus-circle fa-4x float-right text-danger" href="#" onClick={() => {this.props.addCourse(this.state.defaultAddedCourse)}}/>
                </div>
            </nav>
        )
    }
}

export default NavigationComponent;
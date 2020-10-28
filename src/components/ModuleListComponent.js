import React from "react";
import {updateModule} from "../services/ModuleService";
import {Link} from "react-router-dom";


const ModuleListComponent = ({course, modules = [], createModuleForCourse, editModule, deleteModule, updateModule}) =>
    <div>
        <ul className="list-group">
            {
                modules.map(module =>

                    <li className={`${module.editing == true ? "list-group-item active" : "list-group-item"}`}>
                        {
                            !module.editing &&
                            <span>
                                <Link to={`/courseEditor/${course._id}/modules/${module._id}`}>
                                    {module.title}
                                </Link>
                                <i className="fa fa-pencil fa-2x text-info float-right"
                                   onClick={() => editModule({...module, editing: true})}/>
                            </span>
                        }
                        {
                            module.editing &&
                            <span>
                                <input value={module.title}
                                       onChange={(event) => editModule({...module, title: event.target.value})}/>
                                <i className="fa fa-check fa-2x text-white float-right "
                                   onClick={() => updateModule({...module, editing: false})}/>
                                <i className="fa fa-close fa-2x text-white float-right "
                                   onClick={() => deleteModule(module)}/>
                            </span>
                        }
                    </li>
                )
            }
            <li className="list-group-item ">
                <i className="fa fa-plus fa-2x d-flex justify-content-center text-info"
                   onClick={() => createModuleForCourse(course)}/>
            </li>
        </ul>

    </div>


export default ModuleListComponent
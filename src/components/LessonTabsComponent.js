import React from "react";
import {createLessonForModule} from "../services/LessonService";
import {Link} from "react-router-dom";

const LessonTabsComponent = ({course, moduleId, lessons = [], editLesson, updateLesson, deleteLesson, createLessonForModule}) =>

    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li key={lesson._id} className="nav-item">
                    <div className="nav-link">
                        {
                            !lesson.editing &&
                            <span>
                                <Link to={`/courseEditor/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>{lesson.title}</Link>
                                <i className="fa fa-pencil ml-4 text-info" onClick={() => {
                                    editLesson({...lesson, editing: true})
                                }}/>
                            </span>
                        }
                        {
                            lesson.editing &&
                            <span>
                                <input value={lesson.title} onChange={(event) => {
                                    editLesson({...lesson, title: event.target.value})
                                }}/>
                                <i className="fa fa-check ml-2 text-info" onClick={() => {
                                    updateLesson({...lesson, editing: false})
                                }}/>
                                <i className="fa fa-close ml-2 text-info" onClick={() => {
                                    deleteLesson(lesson)
                                }}/>
                            </span>
                        }

                    </div>
                </li>
            )
        }

        <li className="nav-item">
            <div className="nav-link">
                <i className="fa fa-plus text-info"
                   onClick={() => {
                       createLessonForModule(moduleId)
                   }}/>
            </div>
        </li>

    </ul>

export default LessonTabsComponent
import React from "react";
import {Link} from "react-router-dom";

const TopicPillsComponent = ({course,moduleId,lessonId, topics = [], createTopicForLesson, editTopic, deleteTopic, updateTopic}) =>
    <ul className="nav nav-tabs">
        {
            topics.map(topic =>
                <li key={topic._id} className="nav-item">
                    <div className="nav-link">
                        {
                            !topic.editing &&
                            <span>
                                <Link to={`/courseEditor/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                                    {topic.title}
                                </Link>
                                <i className="fa fa-pencil ml-4 text-info float-right" onClick={() => {
                                    editTopic({...topic, editing: true})
                                }}/>
                             </span>
                        }

                        {
                            topic.editing &&
                            <span>
                                <input value={topic.title} onChange={(event) => {
                                    editTopic({...topic, title: event.target.value})
                                }}/>
                                <i className="fa fa-check ml-4 text-info float-right" onClick={() => {
                                    updateTopic({...topic, editing: false})
                                }}/>
                                <i className="fa fa-close ml-4 text-info float-right" onClick={() => {
                                    deleteTopic(topic)
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
                   onClick={() => createTopicForLesson(lessonId)}/>
            </div>
        </li>
    </ul>


export default TopicPillsComponent
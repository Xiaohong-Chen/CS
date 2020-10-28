import React from "react";
import {Link} from "react-router-dom";

const TopicPillsComponent = ({lessonId, topics = [], createTopicForLesson, editTopic, deleteTopic, updateTopic}) =>
    <ul className="list-group">
        {
            topics.map(topic =>
                <li key={topic._id} className="list-group-item">

                    {
                        !topic.editing &&
                        <span>
                            {topic.title}
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


                </li>
            )
        }
        <li className="list-group-item ">
            <i className="fa fa-plus fa-2x d-flex justify-content-center text-info"
               onClick={() => createTopicForLesson(lessonId)}/>
        </li>
    </ul>


export default TopicPillsComponent
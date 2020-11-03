import React from "react";
import {connect} from "react-redux"
import TopicPillsComponent from "../components/TopicPillsComponent";
import TopicService from "../services/TopicService";

const stateToPropsMapper = (state) => {
    return ({
        course: state.courseReducer.course,
        moduleId: state.lessonReducer.moduleId,
        topics: state.topicReducer.topics,
        lessonId: state.topicReducer.lessonId
    })
}

const dispatchToPropsMapper = (dispatch) =>{
    return({
        createTopicForLesson: (lessonId) => TopicService.createTopicForLesson(lessonId,{title:"New Topic"})
            .then(actualTopic => dispatch({type:"CREATE_TOPIC_FOR_LESSON", topic: actualTopic})),

        editTopic : (topic) => dispatch({type:"EDIT_TOPIC",topic}),

        deleteTopic: (topic) => TopicService.deleteTopic(topic._id)
            .then(status => dispatch({type:"DELETE_TOPIC", topic})),

        updateTopic: (topic) => TopicService.updateTopic(topic._id,topic)
            .then(status => dispatch({type:"EDIT_TOPIC", topic}))
    })
}
export default connect(stateToPropsMapper,dispatchToPropsMapper)(TopicPillsComponent)
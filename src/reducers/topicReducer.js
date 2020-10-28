const initialState = {
    topics: [],
    lessonId: ""
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
        case "CREATE_TOPIC_FOR_LESSON":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "EDIT_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => topic._id !== action.topic._id ? topic : action.topic)
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topic._id)
            }
        default:
            return state
    }
}

export default topicReducer
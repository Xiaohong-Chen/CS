const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/001571524/lessons"
const topicUrl = "http://wbdv-generic-server.herokuapp.com/api/001571524/topics"

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopicForLesson = (lessonId,topic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`,{
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic =(topicId) =>
    fetch(`${topicUrl}/${topicId}`,{
        method:"DELETE"
    }).then(response => response.json())

export const updateTopic =(topicId,newTopic) =>
    fetch(`${topicUrl}/${topicId}`,{
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export default {
    findTopicsForLesson,
    createTopicForLesson,
    deleteTopic,
    updateTopic
}
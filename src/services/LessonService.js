const moduleURL = "http://wbdv-generic-server.herokuapp.com/api/001571524/modules"
const lessonURL = "https://wbdv-generic-server.herokuapp.com/api/001571524/lessons"

export const updateLesson = (lesson) =>
    fetch(`${lessonURL}/${lesson._id}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${lessonURL}/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${moduleURL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${moduleURL}/${moduleId}/lessons`)
        .then(response => response.json())

export default {findLessonsForModule, createLessonForModule, deleteLesson, updateLesson}
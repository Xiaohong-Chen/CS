const coursesURL = "http://wbdv-generic-server.herokuapp.com/api/001571524/courses"
const modulesURL = "http://wbdv-generic-server.herokuapp.com/api/001571524/modules"

export const updateModule = (moduleId, newModule) =>
    fetch(`${modulesURL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${modulesURL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

//return a new module
export const createModuleForCourse = (courseId, newModule) =>
    fetch(`${coursesURL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${coursesURL}/${courseId}/modules`)
        .then(response => response.json())

export default {createModuleForCourse, findModulesForCourse, deleteModule, updateModule}
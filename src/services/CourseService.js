const url = "http://wbdv-generic-server.herokuapp.com/api/%7BSomethingUnique%7D/courses"

/*creates a new course instance and adds it to the collection of courses*/
export const createCourse = (newCourse) => {
    return (
        fetch(url, {
            method: "POST",
            body: JSON.stringify(newCourse),
            headers: {
                'content-type': `application/json`
            }
        })
            .then(response => response.json())
    )
}

/*retrieves all course instances as an array of courses*/
export const findAllCourses = () => {
    return (
        fetch(url)
            .then(response => response.json())
    )
}

/*retrieves a course instance that matches the id parameter*/
export const findCourseById = (courseId) => {
    return (
        fetch(`${url}/${courseId}`)
            .then(response => response.json())
    )
}

/*updates the course instance whose id matches the id parameter. Updates the instance with values in course parameter*/
export const updateCourse = (courseId, newCourse) => {
    return (
        fetch(`${url}/${courseId}`, {
            method: "PUT",
            body: JSON.stringify(newCourse),
            headers: {
                'content-type': `application/json`
            }
        })
            .then(response => response.json())
    )
}

/*deletes course instance whose id matches the id parameter*/
export const deleteCourse = (courseId) => {
    return (
        fetch(`${url}/${courseId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}


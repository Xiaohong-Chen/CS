const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL = "http://localhost:8080/api/topics"

const createWidget = (tid, widget) =>
    fetch(`${TOPIC_URL}/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

const findWidgetsForTopic = (tid) =>
    fetch(`${TOPIC_URL}/${tid}/widgets`)
        .then(response => response.json())

const findAllWidgets = () =>
    fetch(`${WIDGET_URL}`)
        .then(response => response.json())


const findWidgetById = (wid) =>
    fetch(`${WIDGET_URL}/${wid}`)
        .then(response => response.json())

const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget
}
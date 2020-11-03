const initialState = {
    widgets: [],
    topicId: "",
    preview: true,
    currentOrder:0
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return (
                {
                    ...state,
                    widgets: [
                        ...state.widgets,
                        action.widget
                    ]

                }
            )
        case "FIND_WIDGETS_FOR_TOPIC":
            return (
                {
                    ...state,
                    widgets: action.widgets,
                    topicId: action.topicId
                }
            )

        case "DELETE_WIDGET":
            return (
                {
                    ...state,
                    widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
                }
            )

        case "PREVIEW_TOGGLE_CHANGE":
            return (
                {
                    ...state,
                    preview: action.value
                }
            )
        case "EDIT_WIDGET":
            return (
                {
                    ...state,
                    widgets: state.widgets.map(widget => widget.id !== action.widget.id ? widget : action.widget),
                }
            )
        case "EDIT_WIDGET_ARROW":
            return (
                {
                    ...state,
                    widgets: state.widgets.map(widget => widget.id !== action.widget.id ? widget : action.widget),
                    currentOrder: state.currentOrder+1
                }
            )

        default:
            return state;
    }
}

export default widgetReducer
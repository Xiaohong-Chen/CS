import React from "react";
import WidgetService from "../services/WidgetService";
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";


const stateToPropsMapper = (state) => {
    return (
        {
            topicId: state.widgetReducer.topicId,
            widgets: state.widgetReducer.widgets,
            preview: state.widgetReducer.preview
        }
    )
}

const dispatchToPropsMapper = (dispatch) => {
    return (
        {
            createWidget: (topicId,widgetOrder) => WidgetService.createWidget(topicId, {
                name: "NEW WIDGET",
                type: "Heading",
                size: "1",
                widgetOrder: widgetOrder
            })
                .then(widget => dispatch({type: "CREATE_WIDGET", widget})),

            deleteWidget: (widgetId) => WidgetService.deleteWidget(widgetId)
                .then(status => dispatch({type: "DELETE_WIDGET", widgetId})),

            previewToggleChange: (value) => dispatch({type: "PREVIEW_TOGGLE_CHANGE", value}),

            editWidget: (widget) => dispatch({type: "EDIT_WIDGET", widget}),

            updateWidget: (widget) => WidgetService.updateWidget(widget.id, widget)
                .then(status => {
                    dispatch({type: "EDIT_WIDGET_ARROW", widget})
                })


        }
    )
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(WidgetListComponent)
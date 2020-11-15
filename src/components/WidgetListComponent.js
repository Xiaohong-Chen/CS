import React from "react";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ListWidgetComponent from "./widgets/ListWidgetComponent";
import ImageWidgetComponent from "./widgets/ImageWidgetComponent";

const WidgetListComponent = ({preview, topicId, widgets = [], createWidget, deleteWidget, previewToggleChange, editWidget, updateWidget, findWidgetsForTopic}) =>
    <div>

        <div className="row">
            <div className="ml-auto mt-4 mb-2">
                <button type="button" className="btn btn-success mx-3" onClick={() => {
                    widgets.map(widget => updateWidget(widget))
                }}>Save
                </button>
                <label className="switch float-right mx-3 mt-1">
                    <input type="checkbox" checked={preview}
                           onClick={(event => previewToggleChange(event.target.checked))}/>
                    <span className="slider round"></span>
                </label>
                <div className="h3 float-right">Preview</div>
            </div>
        </div>


        <ul className="list-group">

            {
                !preview &&
                widgets.map(widget =>

                    <li className="list-group-item">
                        <div className="d-flex">
                            <h3>Widget: {widget.type}  </h3>

                            <div className="ml-auto ">

                                <button className="fa fa-arrow-up btn btn-warning ml-1 widgetButton"
                                        onClick={() => {
                                            updateWidget({...widget, widgetOrder: widget.widgetOrder - 1})
                                        }}
                                        disabled={widget.widgetOrder <= 1 ? true : false}/>

                                <button className="fa fa-arrow-down btn btn-warning ml-1 widgetButton"
                                        onClick={() => {
                                            updateWidget({...widget, widgetOrder: widget.widgetOrder + 1})
                                        }}
                                        disabled={widget.widgetOrder >= widgets.length ? true : false}/>

                                <select className="custom-select ml-1 widgetDropdown"
                                        style={{width: 200, height: 50}}
                                        value={widget.type}
                                        onChange={event => editWidget({...widget, type: event.target.value})}>
                                    <option selected disabled>Select Type</option>
                                    <option value="Paragraph">Paragraph</option>
                                    <option value="Heading">Heading</option>
                                    <option value="List">List</option>
                                    <option value="Image">Image</option>
                                </select>

                                <button className="fa fa-times fa-2x btn btn-danger ml-1 widgetButton"
                                        onClick={() => deleteWidget(widget.id,topicId)}/>
                            </div>
                        </div>
                        {
                            widget.type === "Paragraph" &&
                            <ParagraphWidgetComponent widget={widget}
                                                      editWidget={editWidget}/>
                        }
                        {
                            widget.type === "Heading" &&
                            <HeadingWidgetComponent widget={widget}
                                                    editWidget={editWidget}/>
                        }
                        {
                            widget.type === "List" &&
                            <ListWidgetComponent widget={widget}
                                                 editWidget={editWidget}/>
                        }
                        {
                            widget.type === "Image" &&
                            <ImageWidgetComponent widget={widget}
                                                  editWidget={editWidget}/>
                        }
                    </li>
                )
            }
        </ul>

        {
            preview &&
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item align-middle">
                            <div className="d-flex">
                                <h3>{widget.name} | {widget.type} </h3>
                            </div>
                        </li>
                    )
                }
            </ul>
        }


        <div>
            <button className="fa fa-plus fa-2x d-flex btn btn-danger float-right mt-3" style={{height: 50, width: 50}}
                    onClick={() => createWidget(topicId, (widgets.length + 1))}/>
        </div>
    </div>

export default WidgetListComponent

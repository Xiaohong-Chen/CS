import React from "react";
import ImageWidgetComponent from "./ImageWidgetComponent";

const ListWidgetComponent = ({widget, editWidget}) =>
    <div>
        <textarea className="form-control my-4"
                  value={widget.text}
                  placeholder="Enter One List Item Per Line"
                  rows="5"
                  onChange={event => editWidget({...widget, text: event.target.value})}/>

        <select className="custom-select "
                style={{width: 200, height: 50}}
                value={widget.cssClass}
                onChange={event => editWidget({...widget, cssClass: event.target.value})}>
            <option selected disabled>Choose List Type</option>
            <option value="ul">Unordered List</option>
            <option value="ol">Ordered List</option>
        </select>

        <div>
            <h1>Preview</h1>

            {
                widget.cssClass == "ol" &&
                <ol>
                    {widget.text.split("\n").map(line =><li>{line}</li>) }
                </ol>
            }
            {
                widget.cssClass == "ul" &&
                <ul>
                    {widget.text.split("\n").map(line =><li>{line}</li>) }
                </ul>
            }
        </div>
    </div>


export default ListWidgetComponent
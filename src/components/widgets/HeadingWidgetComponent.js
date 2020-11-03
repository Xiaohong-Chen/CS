import React from "react";

const HeadingWidgetComponent = ({widget, deleteWidget, editWidget}) =>

    <div>
        <select className="custom-select "
                style={{width: 200, height: 50}}
                value={widget.size}
                onChange={event => editWidget({...widget, size: event.target.value})}>
            <option selected disabled>Choose Size</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
        </select>
    </div>

export default HeadingWidgetComponent
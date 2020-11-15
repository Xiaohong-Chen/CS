import React from "react";

const ParagraphWidgetComponent = ({widget, editWidget}) =>

    <div>
        <textarea className="form-control my-4"
                  value={widget.text}
                  placeholder="Paragraph Text"
                  rows="5"
                  onChange={event => editWidget({...widget, text: event.target.value})}/>
        <div>
            <h1>Preview</h1>


        </div>
    </div>

export default ParagraphWidgetComponent
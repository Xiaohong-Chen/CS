import React from "react";

const ParagraphWidgetComponent = ({widget, deleteWidget, editWidget}) =>

    <div>
        <textarea className="form-control my-4"
                  value={widget.text}
                  placeholder="Paragraph Text"
                  rows="5"
                  onChange={event => editWidget({...widget, text: event.target.value})}/>
    </div>

export default ParagraphWidgetComponent
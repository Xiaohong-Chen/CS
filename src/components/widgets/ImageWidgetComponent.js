import React from "react";

const ImageWidgetComponent = ({widget,editWidget}) =>

    <div>
        <input className="form-control" value={widget.src} onChange={(event => editWidget({...widget, src: event.target.value}))}/>
    </div>

export default ImageWidgetComponent
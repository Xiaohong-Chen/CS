import React from "react";

const ImageWidgetComponent = ({widget,editWidget}) =>

    <div>
        <input className="form-control" value={widget.src} onChange={(event => editWidget({...widget, src: event.target.value}))}/>

        <div>
            <h1>Preview</h1>

            <img src={widget.src}/>
        </div>
    </div>

export default ImageWidgetComponent
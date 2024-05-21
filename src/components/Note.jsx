import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab } from "@material-ui/core";
function Note(props){
    function handleClick(){
        props.ondelete(props.id);
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab size="small" color="secondary" aria-label="delete" onClick = {handleClick}><DeleteIcon/></Fab>
        </div>
    );
}
export default Note;
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function NewItem(prop) {

    function handleClick() {
        prop.onDelete(prop.id)
    }

    return (
        <div className={'note'}>
            <h1>{prop.title}</h1>
            <p>{prop.content}</p>
            <button onClick={handleClick}><DeleteIcon/></button>
        </div>
    )
}

export default NewItem
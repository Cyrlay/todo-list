import {useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

    const [note, setNote] = useState({title: '', content: ''})

    function handleChange(e) {
        const {value, name} = e.target
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(e) {
        if (note.title === '' || note.content === '') {
            alert('Enter title and content')
        } else {
            props.onAdd(note)
            setNote({
                title: '',
                content: ''
            })
            e.preventDefault()
        }
    }

    return (
        <div className={'container'}>
            <div className={'add-note'}>
                <p>Add Note:</p>
                <form>
                    <input className={'item-title'} name={'title'} placeholder={'Title...'} onChange={handleChange}
                           value={note.title}
                           type="text"/>
                    <textarea
                        className={'text-area'}
                        placeholder={'Message...'}
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        cols="30"
                        rows="10"/>
                    <Fab className={'add-button'} onClick={submitNote}><AddCircleIcon/></Fab>
                </form>
            </div>
        </div>
    )
}

export default CreateArea
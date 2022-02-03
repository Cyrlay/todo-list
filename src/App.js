import './style/App.css';
import {useState} from "react";
import NewItem from "./components/NewItem";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

    const [notes, setNotes] = useState([])

    function addItem(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    function deleteItem(id) {
        setNotes((prevItems) => {
            return prevItems.filter((noteItem, index) => {
                return index !== id
            })
        })
    }

    return (
        <div className={'app'}>
            <Header/>
            <CreateArea
                onAdd={addItem}/>
            {notes.map((noteItem, index) => {
                return (
                    <NewItem
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteItem}
                    />)
            })}
            <Footer/>
        </div>

    )
}

export default App;
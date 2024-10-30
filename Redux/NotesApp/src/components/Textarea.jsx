import { useDispatch } from 'react-redux';
import { useState } from 'react';
import '../App.css';
import { addNote } from "../redux/noteSlice"
import { nanoid } from 'nanoid'

function Textarea() {
    const dispatch = useDispatch();
    const [note, setNote] = useState("");
    const [color, setColor] = useState();

    const handleAddNotes = async (e) => {
        e.preventDefault();
        if (note.trim()) {
            await dispatch(addNote({ id: nanoid(), content: note, color })); // Renk bilgisini gönder
            setNote('');
        }
    }

    return (
        <>
            <div className='title'>Notes-App</div>
            <div className="note-container">
                <textarea
                    rows="5"
                    className="note-textarea"
                    placeholder="Enter your note here..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                ></textarea>

                <div className="button-row">
                    <div className="color-buttons">
                        <button className="color-btn btn-blue" onClick={() => setColor("btn-blue")}></button>
                        <button className="color-btn btn-red" onClick={() => setColor("btn-red")}></button>
                        <button className="color-btn btn-purple" onClick={() => setColor("btn-purple")}></button>
                        <button className="color-btn btn-yellow" onClick={() => setColor("btn-yellow")}></button>
                        <button className="color-btn btn-green" onClick={() => setColor("btn-green")}></button>
                    </div>

                    <form className="add-note-form">
                        <button className="add-note-btn" onClick={handleAddNotes}>Add</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Textarea;

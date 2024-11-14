import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../redux/noteSlice"
import '../App.css';

function NoteList() {
    const dispatch = useDispatch()
    const notes = useSelector((state) =>
        state.notes.filteredNotes.length > 0 ? state.notes.filteredNotes : state.notes.items
    );


    const onClick = async (id) => {
        await dispatch(removeNote(id))
    }


    return (
        <div>
            {notes.map((note) => (
                <div
                    className={`note-list ${note.color}`}
                    key={note.id}
                >
                    <div className="note">
                        <p>{note.content}</p>
                    </div>

                    <div className="note-icons">
                        <IoIosClose className="remove-icon" onClick={() => onClick(note.id)} />
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default NoteList
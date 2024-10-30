import Textarea from "./Textarea"
import FilterInput from "./filterInput"
import NoteList from "./noteList"
import '../App.css'
function noteForm() {
    return (
        <div className="conatiner">
            <Textarea />
            <FilterInput />
            <NoteList />

        </div>
    )
}

export default noteForm
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodoAsync } from "../redux/todos/services"
import Loading from './Loading'
import Error from './Error'

function Form() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.todos.addNewTodo.isLoading)
    const error = useSelector(state => state.todos.addNewTodo.error)


    const handleSubmit = async (e) => {
        if (!title) {
            return alert("Boş geçilemez")
        }

        e.preventDefault()
        await dispatch(addTodoAsync({ title }))
        setTitle('')
    }

    if (error) {
        alert(error)
        return
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <input
                disabled={isLoading}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)} />


            {
                isLoading && <Loading />
            }
            {
                error && <Error message={error} />
            }

        </form>
    )
}

export default Form
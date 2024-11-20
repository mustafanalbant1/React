import { useEffect, useState } from "react"
import Form from "./Form/Form"
import List from "./List/List"
import "../Contacts/styles.css"

function Contacts() {
    const [contacts, setContacts] = useState([{
        fullname: "",
        phone_number: ""
    },
    ])



    useEffect(() => {
        console.log("Contacts updated:", contacts);
    }, [contacts])

    return (
        <div className="container">
            <Form addContact={setContacts} contacts={contacts} />
            <List contacts={contacts} />

        </div>
    )
}

export default Contacts
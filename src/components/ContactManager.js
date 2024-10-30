import { useState } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

function ContactManager() {
    const [contacts, setContacts] = useState([]);

    const handleAddContact = (newContact) => {
        const contactWithId = { ...newContact, id: Date.now() }; // Add a unique ID
        setContacts((prevContacts) => {
            const updatedContacts = [...prevContacts, contactWithId];
            console.log("Updated contacts:", updatedContacts); // Debug log
            return updatedContacts;
        })
    };

        return (
            <div>
                <ContactForm onAddContact={handleAddContact} />
                {contacts.length === 0 ? (
                    <p>No contacts added yet</p>
                ) : (
                    contacts.map((contact) => (
                        <div key={contact.id}>
                            {console.log("Rendering contact card for:", contact)} {/* Debug log */}
                            <ContactCard contact={contact} />
                        </div>
                    ))
                )}
            </div>
        );;
};

export default ContactManager
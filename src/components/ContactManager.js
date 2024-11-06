// Importerer Reacts useState-hook til at håndtere komponentens tilstand
import { useState } from "react";

// Importerer ContactCard og ContactForm-komponenterne
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

// Definerer ContactManager-komponenten, som håndterer listen af kontakter og interaktionen med formularen
function ContactManager() {
    // Definerer en tilstandsvariabel 'contacts' til at gemme kontaktlisten og en funktion 'setContacts' til at opdatere listen
    const [contacts, setContacts] = useState([]);

    // Funktion til at håndtere tilføjelse af en ny kontakt
    const handleAddContact = (newContact) => {
        // Tilføjer en unik ID til den nye kontakt (baseret på den aktuelle tid)
        const contactWithId = { ...newContact, id: Date.now() };
        
        // Opdaterer tilstanden 'contacts' ved at tilføje den nye kontakt til den eksisterende liste
        setContacts((prevContacts) => {
            const updatedContacts = [...prevContacts, contactWithId];
            console.log("Updated contacts:", updatedContacts); // Debug-log for at vise opdaterede kontakter
            return updatedContacts;
        });
    };

    // Returnerer komponentens JSX-struktur
    return (
        <div>
            {/* Renders ContactForm og giver 'handleAddContact' som prop til at håndtere formularindsendelse */}
            <ContactForm onAddContact={handleAddContact} />
            
            {/* Hvis kontaktlisten er tom, vises en besked; ellers vises alle kontakter som ContactCard-komponenter */}
            {contacts.length === 0 ? (
                <p>No contacts added yet</p> // Vis besked, hvis der ikke er nogen kontakter
            ) : (
                contacts.map((contact) => (
                    // Renderer et ContactCard for hver kontakt i 'contacts' listen
                    <div key={contact.id}>
                        {console.log("Rendering contact card for:", contact)} {/* Debug-log for at vise, hvilken kontakt der vises */}
                        <ContactCard contact={contact} />
                    </div>
                ))
            )}
        </div>
    );
}

// Eksporterer ContactManager-komponenten, så den kan bruges i andre filer
export default ContactManager;

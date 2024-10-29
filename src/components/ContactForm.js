import { useState } from "react";

function ContactForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState(null); 
    const [contacts, setContacts] = useState([]);


    const handleOnContactChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
            case 'firstname':
              setFirstname(value);
              break;
            case 'lastname':
              setLastname(value);
              break;
            case 'email':
              setEmail(value);
              break;
            case 'phone':
              setPhone(value);
              break;
            case 'company':
              setCompany(value);
              break;
            case 'position':
              setPosition(value);
              break;
            default:
              break;
          }
        };

        function handleAddContact(e) {
            if (firstname === '' || lastname === '' || email === '') {
                setError('Cannot add empty field.');
              } else {
                const newContactArray = [...contacts, {id: contacts.length + 1, firstname, lastname, email, phone, company, position}];
                setContacts(newContactArray);
                console.log("Contact added:", { firstname, lastname, email, phone, company, position });
                setFirstname('');
                setLastname('');
                setEmail('');
                setPhone('');
                setCompany('');
                setPosition('');
              }
            }

    return (
        <section>
            <div>
                <div>
                    <form>
                    <h2>Kontaktoplysninger</h2>
                    <div>
                        <label>
                            Fornavn 
                        </label>
                        <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            placeholder='Fornavn'
                            required
                            value={firstname}
                            onChange={handleOnContactChange}
                        />
                    </div>
                    <div>
                        <label>
                            Efternavn 
                        </label>
                        <input
                            type='text'
                            id='lastname'
                            name='lastname'
                            placeholder='Efternavn'
                            required
                            value={lastname}
                            onChange={handleOnContactChange}
                        />
                    </div>
                    <div>
                        <label>
                            Email 
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            required
                            value={email}
                            onChange={handleOnContactChange}
                        />
                    </div>
                    <div>
                        <label>
                            Telefonnummer  
                        </label>
                        <input
                            type='text'
                            id='phone'
                            name='phone'
                            placeholder='Telefonnummer'
                            required
                            value={phone}
                            onChange={handleOnContactChange}
                        />
                    </div>
                    <div>
                        <label>
                            Firma 
                        </label>
                        <input
                            type='text'
                            id='company'
                            name='company'
                            placeholder='Firma'
                            value={company}
                            onChange={handleOnContactChange}
                        />
                    </div>
                    <div>
                        <label>
                            Stilling 
                        </label>
                        <input
                            type='text'
                            id='position'
                            name='position'
                            placeholder='Stilling'
                            value={position}
                            onChange={handleOnContactChange}
                        />
                    </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}  
                    <div>
                        <button type='submit' onClick={handleAddContact}>Tilføj kontakt</button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;


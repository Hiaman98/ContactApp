import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
    const   LOCAL_STORAGE_KEY = "contactKeys";
    const [contacts, SetContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log(uuid())
        SetContacts([...contacts, { id: uuid(), ...contact}]);
    };

    // Delete contacts
    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        SetContacts(newContactList);
    }
    // get data from local storage when page refreshes
    useEffect(() => {
        const retriveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retriveContacts) {
            SetContacts(retriveContacts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }, [contacts]);



    return (
        <div className='ui container'>
            <Header />
            <AddContact addContactHandler = {addContactHandler} />
            <ContactList contacts = {contacts}  getContactId={removeContactHandler}  />
        </div>
    );
}

export default App;

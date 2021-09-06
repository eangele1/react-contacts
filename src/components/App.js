import React, { useState, useEffect } from "react";
import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";

import { getContacts } from "../utils/contacts";
import { login } from "../utils/auth";

import { ContactContext } from '../context/ContactContext.js';
import { AuthContext } from '../context/AuthContext.js';

import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

const mockContacts = [
  {
    "id": 1,
    "firstName": "Culley",
    "lastName": "Snelman",
    "profilePic": "https://i.pravatar.cc/300?u=1",
    "phoneNumber": "351-346-6140",
    "email": "csnelman0@blog.com",
    "address": "09 Eggendart Parkway"
  },
  {
    "id": 2,
    "firstName": "Tammara",
    "lastName": "Allcorn",
    "profilePic": "https://i.pravatar.cc/300?u=2",
    "phoneNumber": "676-783-9239",
    "email": "tallcorn1@senate.gov",
    "address": "78145 Brentwood Court"
  },
  {
    "id": 3,
    "firstName": "Cassandry",
    "lastName": "Roze",
    "profilePic": "https://i.pravatar.cc/300?u=3",
    "phoneNumber": "223-879-6692",
    "email": "croze2@w3.org",
    "address": "2079 Morrow Parkway"
  },
  {
    "id": 4,
    "firstName": "Koressa",
    "lastName": "Galey",
    "profilePic": "https://i.pravatar.cc/300?u=4",
    "phoneNumber": "761-858-5580",
    "email": "kgaley3@economist.com",
    "address": "5 Hanover Alley"
  }
];

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState(null);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'LOGIN':
        if (login(payload.user.username, payload.user.password)) {
          setUser(payload.user);
        }
        return;
      case 'LOGOUT':
        setUser(null);
        return;
      default:
        return;
    }
  }

  const dispatchContactEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_CONTACT':
        setContacts([...contacts, payload.newContact]);
        return;
      case 'REMOVE_CONTACT':
        setContacts(contacts.filter(contact => contact.id !== payload.contactID));
        return;
      default:
        return;
    }
  };

  // will only run once
  useEffect(() => {
    const storedContacts = getContacts();

    setContacts(storedContacts.length ? storedContacts : mockContacts);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ user, dispatchUserEvent }}>
        <ContactContext.Provider value={{ contacts, dispatchContactEvent }}>
          <BrowserRouter>
            <Switch>
              <PublicRoute restricted={true} component={LoginPage} path="/login" exact />
              <PublicRoute restricted={true} component={RegisterPage} path="/register" exact />
              <PrivateRoute component={ContactsPage} path="/" exact />
              <PrivateRoute component={ContactCreatePage} path="/contacts/add" />
              <PrivateRoute component={ContactDetailsPage} path="/contacts/:index" />
            </Switch>
          </BrowserRouter>
        </ContactContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

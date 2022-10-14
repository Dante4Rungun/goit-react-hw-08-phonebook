import React from "react";
import styled from "./ContactForm.module.css"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";
import Notiflix from "notiflix";

export const ContactForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)
    
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target

        contacts.findIndex(contact => contact.name === form.elements.name.value) === -1 ?
            dispatch(addContact({ name: form.elements.name.value, number: form.elements.number.value }))
            :
            Notiflix.Notify.warning(`Contact ${form.elements.name.value} exists in your phonebook`)
        form.reset()
    }

    return (
        <form className={styled.ContactForm} onSubmit={handleSubmit}>
            <h2 className={styled.ContactForm__title}>Contact Form</h2>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className={styled.ContactForm__input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="input name ..."
                    required
                />
                <input
                    id="number"
                    type="tel"
                    name="number"
                    className={styled.ContactForm__input}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="input number ..."
                    required
                />
            <button type="submit" className={styled.ContactForm__submit}>Add Contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func
}

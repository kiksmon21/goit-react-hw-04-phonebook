import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import style from '../ContactForm/ContactForm.module.css';

export const ContactForm = ({ addContact}) => {
  const handleFormSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;

    addContact({ id: nanoid(), name, number });
    event.target.reset();
  };

    return (
      <section className={style.form}>
        <h1 className={style.form__title}>Phonebook</h1>
        <form className={style.form__container} onSubmit={handleFormSubmit}>
          <label className={style.form__label}>Name</label>
          <input
            type="text"
            name="name"
            className={style.form__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
          />
          <label className={style.form__label}>Number</label>
          <input
            type="tel"
            name="number"
            className={style.form__input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            required
          />
          <button className={style.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
}

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  addContact: PropTypes.func.isRequired,
};
import PropTypes from 'prop-types';

import style from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, children, deleteContact }) => {
  return (
    <div className={style.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul className={style.contacts__list}>
        {contacts.map(({ id, name, number }) => (
          <li className={style.contacts__item} key={id}>
            <p className={style.contacts__name}>{name}</p>
            <p className={style.contacts__number}> {number}</p>
            <button
              onClick={() => {
                deleteContact(id);
              }}
              className={style.contacts__btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
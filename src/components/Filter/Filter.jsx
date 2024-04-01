import React from 'react';
import PropTypes from 'prop-types';

import style from '../Filter/Filter.module.css';

export const Filter = ({ filter, addFilter }) => {
  const handleChange = event => {
    addFilter(event.target.value);
  };

    return (
      <div className={style.filter}>
        <input
          type="text"
          name="filter"
          className={style.filter__input}
          value={filter}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>
    );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func,
};
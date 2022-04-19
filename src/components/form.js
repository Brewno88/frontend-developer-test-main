import { useState } from 'react';
import styles from './form.module.css';

const Form = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="newItem" className={styles.label}>
        New Item
      </label>
      <input
        id="newItem"
        type="text"
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" disabled={!value}>
        Add
      </button>
    </form>
  );
};

export default Form;

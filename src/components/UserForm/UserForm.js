import styles from './UserForm.module.css';
import { Button } from '../Button';
import { useState } from 'react';

export const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const changeNameHandler = (e) => {
    setName(e.target.value);
  }

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (age === '' || name === '') {
      props.onShowErrorModal(true);
    } else {
      props.onAddUser({
        name: name,
        age: age,
        id: Math.random().toString()
      })

      setName('');
      setAge('');
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="name">Имя</label>
      <input onChange={changeNameHandler} value={name} type="text" id='name' />

      <label htmlFor="age">Возраст</label>
      <input onChange={changeAgeHandler} value={age} type="number" id='age' />

      <Button>Добавить Пользователя</Button>
    </form>
  );
};
import styles from './ErrorModal.module.css';
import { Button } from '../UIElements/Button/Button.js';
import React from 'react';
import ReactDOM from 'react-dom';

let errorMessage;

const Backdrop = ({ showErrorModalHandler }) => {
  return (
    <div onClick={showErrorModalHandler} className={styles.backdrop}></div>
  )
}

const Modal = ({ showErrorModalHandler }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Некорректный ввод</h2>
      </div>
      <div className={styles.content}>
        <div>{errorMessage}</div>
        <div className={styles.actions}>
          <Button onClick={showErrorModalHandler}>Закрыть</Button>
        </div>
      </div>
    </div>
  )
}

export const ErrorModal = (props) => {
  const { onShowErrorModal, errorType } = props;

  errorMessage = errorType === 'empty' ? 'Эти поля не могут быть пустыми' : 'Возраст должен быть больше 0'

  const showErrorModalHandler = (e) => {
    if (e.target === e.currentTarget) {
      onShowErrorModal(false);
    }
  }


  return (
    <>
      {ReactDOM.createPortal(<Backdrop showErrorModalHandler={showErrorModalHandler}/>, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<Modal showErrorModalHandler={showErrorModalHandler} errorType={errorType}/>, document.getElementById('modal'))}
    </>
  );
};

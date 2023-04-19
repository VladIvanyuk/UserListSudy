import styles from './ErrorModal.module.css';
import { Button } from '../UIElements/Button/Button.js';

export const ErrorModal = (props) => {
  const { onShowErrorModal, errorType } = props;

  const showErrorModalHandler = (e) => {
    if (e.target === e.currentTarget) {
      onShowErrorModal(false);
    }
  }

  const errorMessage = errorType === 'empty' ? 'Эти поля не могут быть пустыми' : 'Возраст должен быть больше 0';

  return (
    <div onClick={showErrorModalHandler} className={styles.backdrop}>
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
    </div>
  );
};
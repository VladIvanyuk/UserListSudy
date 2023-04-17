import styles from './ErrorModal.module.css';
import { Button } from '../Button';

export const ErrorModal = (props) => {
  const { onShowErrorModal } = props;

  const showErrorModalHandler = (e) => {
    if (e.target === e.currentTarget) {
      onShowErrorModal(false);
    }
  }

  return (
    <div onClick={showErrorModalHandler} className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Некорректный ввод</h2>
        </div>
        <div className={styles.content}>
          <div>Эти поля не могут быть пустыми</div>
          <div className={styles.actions}>
            <Button onClick={showErrorModalHandler}>Закрыть</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
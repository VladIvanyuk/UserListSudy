import styles from './Button.module.css';

export const Button = (props) => {
  const { onCloseModal } = props;
  return (
    <button onClick={onCloseModal} className={styles.button}>
      {props.children}
    </button>
  );
};
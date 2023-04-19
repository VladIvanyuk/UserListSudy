import styles from './Button.module.css';

export const Button = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={styles.button}>
      {props.children}
    </button>
  );
};
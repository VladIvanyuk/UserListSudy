import styles from './UserList.module.css';

export const UserList = (props) => {
  console.log(props)
  const allUsers = props.users.map((el) => (
    <li key={el.id}>{el.name} - {el.age} лет</li>
  ))

  const showUsers = allUsers.length > 0 ? allUsers : <li>Список пользователей пуст</li>;

  return (
    <div className={styles.users}>
      <ul>
        {showUsers}
      </ul>
    </div>
  );
};
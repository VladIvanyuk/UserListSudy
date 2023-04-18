import styles from './UserList.module.css';

export const UserList = (props) => {

  const { users, onDeleteUser } = props;

  const saveDeletedIdHandler = (e) => {
    onDeleteUser(e.target.dataset.id);
  }


  const allUsers = users.map((el) => (
    <li key={el.id}>
      <div>
        {el.name} - {el.age} лет
      </div>
      <div>
        <button data-id={el.id} onClick={saveDeletedIdHandler}>Удалить</button>
      </div>
    </li>
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
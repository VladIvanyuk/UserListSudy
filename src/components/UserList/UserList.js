import { Button } from '../UIElements/Button/Button';
import styles from './UserList.module.css';

export const UserList = (props) => {
  console.log(props)
  const { users, onDeleteUser } = props;

  const saveDeletedIdHandler = (id) => {
    onDeleteUser(id);
  }


  const allUsers = users.map((el) => (
    <li key={el.id}>
      <div>
        {el.name} - {el.age} лет
      </div>
      <div>
        <Button onClick={saveDeletedIdHandler.bind(null, el.id)}>Удалить</Button>
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
import { useState } from 'react';
import { UserForm } from './components/UserForm/UserForm.js';
import { UserList } from './components/UserList/UserList.js';
import { ErrorModal } from './components/ErrorModal/ErrorModal.js';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorType, setErrorType] = useState('');

  const addUserHandler = (user) => {
    console.log(user);
    setUsers((prev) => [
      ...prev,
      user
    ])
  }

  const showErrorModalHandler = (error, type) => {
    setIsError(error);
    setErrorType(type);
  }

  const onDeleteUserHandler = (id) => {
    setUsers((prev) => 
    prev.filter((el) => el.id !== id));
  }

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} onShowErrorModal={showErrorModalHandler}/>
      <UserList users={users} onDeleteUser={onDeleteUserHandler}/>
      {isError && <ErrorModal onShowErrorModal={showErrorModalHandler} errorType={errorType}/>}
    </div>
  );
}

export default App;

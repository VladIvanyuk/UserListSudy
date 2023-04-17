import { useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';
import { ErrorModal } from './components/ErrorModal';

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const addUserHandler = (user) => {
    console.log(user);
    setUsers((prev) => [
      ...prev,
      user
    ])
  }

  const showErrorModalHandler = (error) => {
    setIsError(error);
  }


  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} onShowErrorModal={showErrorModalHandler}/>
      <UserList users={users} />
      {isError && <ErrorModal onShowErrorModal={showErrorModalHandler}/>}
    </div>
  );
}

export default App;

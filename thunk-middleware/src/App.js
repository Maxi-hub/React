import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './store/userReducer';
import { fetchUserbyID } from './store/userByIDReducer';


function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const { user, idLoading, idError } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <div className="App">
      <h1>Пользователи</h1>
      {(loading || idLoading) && <p>Загрузка...</p>}
      {(error || idError) && <p> {error || idError}</p>}
      {users.length ? <ul>{
        users.map(user => (
          <li key={user.id}>
            {user.name}
            <button className='button' onClick={
              () => dispatch(fetchUserbyID(user.id))}>
              User ID
            </button>
          </li>
        ))
      }
      </ul> : null
      }
      {user && <p>ID пользователя: {user.id} </p>}
    </div >
  );
}

export default App;
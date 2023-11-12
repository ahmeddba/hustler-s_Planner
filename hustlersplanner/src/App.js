import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Tasks from './Pages/Tasks';
import Achievements from './Pages/Achievements';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import AddTask from './Pages/AddTask';
import EditTask from './Pages/EditTask';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ErrorNotification from './Components/ErrorNotification/ErrorNotification';
import SuccessNotification from './Components/SuccessNotification/SuccessNotification';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Pages/Error';
import { current } from './JS/Actions/AuthActions';


function App() {

  const dispatch = useDispatch();
  const authErrors = useSelector(state => state.AuthReducer.errors);
  const authSuccess = useSelector(state => state.AuthReducer.success);
  const isAuth = useSelector(state => state.AuthReducer.isAuth);

// const currentUser = useSelector(state =>state.AuthReducer.user);

useEffect(() => {
  dispatch(current());
}, [dispatch])


  return (
    <div className="App">
      {authErrors && authErrors.map((el , index) => <ErrorNotification error={el} key={index}/>)}
      {authSuccess && [authSuccess].map((el , index) => <SuccessNotification success={el} key={index} />)}

      <Navigation />

      <Routes>
            <Route path="/" element={<Home />} />
        {
          isAuth?
             <>
            <Route path='/tasks' element={<Tasks />}/>
            <Route path='/Achievements' element={<Achievements/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/newTask' element={<AddTask  />} />
            <Route path='/editTask/:id' element={<EditTask />} />
             </>
              :
             <>
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />
             </>
        }
            <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;

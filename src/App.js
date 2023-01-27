import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthListener } from './features/auths/AuthSlice';


function App() {
  const dispatch = useDispatch();
  (async () => dispatch(setAuthListener()))();

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;

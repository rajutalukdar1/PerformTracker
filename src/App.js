import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;

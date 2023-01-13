import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='w-[95%] mx-auto'>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;

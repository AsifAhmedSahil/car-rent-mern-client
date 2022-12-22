
import './App.css';
import { RouterProvider} from "react-router-dom"
import router from './Router/Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
   
  return (
    <div className='max-w-[1280px] mx-auto' >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      pauseOnFocusLoss
   
     
      theme="dark"
      />
    </div>
  );
}

export default App;

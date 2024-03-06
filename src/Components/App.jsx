import logo from '../logo.svg';
import '../App.css';
import Slider from './Slider';
import Card from './Card';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import AddProduct from './AddProduct';
import Error from './Error';

function App() {
  let routs = createBrowserRouter([
    {
      path: "/", element: <Layout />,errorElement:<Error />, children: [
        { path: "card", element: <Card /> },
        { path: "slid", element: <Slider /> },
        { path: "addproduct", element: <AddProduct /> },
    ]},
  ]);
  return (
    <>
      
      <RouterProvider router={routs} />
      
    </>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";


import Register from "./pages/register";
import Login from "./pages/login"
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style/style.scss"


const Layout=()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>

    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
{
  path: "/",
  element:<Layout/>,
    children:[
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/post/:id",
    element:<Single/>
  },
  {
    path:"/write",
    element:<Write/>
  },
    ]
},
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/login",
    element:<Login/>,
  }
]);

function App() {

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);


  return (
    <div className="app">
      <div class="container">
      <RouterProvider router={router}/>
      </div>
      </div>
  );
}



export default App;

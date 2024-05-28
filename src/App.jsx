import { Home } from "./Components/Home"
import { SingIn } from "./Components/SingIn."
import { FrontPage } from "./Components/FrontPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

const routs = createBrowserRouter([
  {
    path : "/",
    element  : <FrontPage/>
  },

  {
    path  :"home",
    element : <Home/>
  },

  {
    path : "singIn",
    element : <SingIn/>
  }

]
  
)

  return (
    <>
        <RouterProvider router={routs}/>
    </>
  )
}

export default App

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.tsx";
import Signup from "./signup/signup.tsx";

function App() {

  return (
   <BrowserRouter>
       <Routes>
            <Route path={"/"} element={<Signup />}/>
           <Route path={"/dashboard"} element={<Dashboard />}/>
       </Routes>
   </BrowserRouter>
  )
}

export default App

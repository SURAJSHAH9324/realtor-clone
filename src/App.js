import { BrowserRouter as Router, Routes,Route, Form } from "react-router-dom";
import Home from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/offer" element={<Offers/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;

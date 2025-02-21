import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Index";
import ForgotPassord from "../pages/forgotPassword/Index";
import VerifyCode from "../pages/verification/Index";
import ResetPassword from "../pages/resetPassword/Index";
import Congratulation from "../pages/congratulation/Index";
import Welcome from "../pages/welcome/Index";
import FirstQuestion from "../pages/firstQuestion/FirstQuestion";
import SecondQuestion from "../pages/secondQuestion/SecondQuestion";
import ThirdQuestion from "../pages/thirdQuestion/ThirdQuestion";

// import SignUp from "../pages/signUp/Index";

const Login = lazy(()=> import("../pages/login/Index"))

const Unauthenticated = (props) => {
  return (
    <Suspense fallback={<p></p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/forgot-password" element={<ForgotPassord />} /> */}
          <Route path="/verify-code/:email" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path = "/congratulation" element ={<Congratulation />} />
          <Route path="/welcome" element= {<Welcome />} />
          <Route path="/first-question" element={<FirstQuestion />} />
          <Route path="/second-question" element={<SecondQuestion />} />
          <Route path="/third-question" element={<ThirdQuestion />}/>
           {/* <Route path="/sign-up" element={<SignUp />} /> */}
          
          

          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Unauthenticated
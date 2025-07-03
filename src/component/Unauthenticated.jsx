import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Index";
import VerifyCode from "../pages/verification/Index";
import ResetPassword from "../pages/resetPassword/Index";
import Congratulation from "../pages/congratulation/Index";
import Welcome from "../pages/welcome/Index";
import FirstQuestion from "../pages/firstQuestion/FirstQuestion";
import SecondQuestion from "../pages/secondQuestion/SecondQuestion";
import ThirdQuestion from "../pages/thirdQuestion/ThirdQuestion";
import ClientSecondQuestion from "../pages/clientSecondQuestion/clientSecondQuestion";
import ClientThirdQuestion from "../pages/clientThirdQuestion/ClientThirdQuestion";
import AgencyFirstQuestion from "../pages/clientAgency/AgencyFirstQuestion";
import AgencySecondQuestion from "../pages/clientAgency/AgencySecondQuestion";

// import SignUp from "../pages/signUp/Index";

const Login = lazy(()=> import("../pages/login/Index"))

const Unauthenticated = (props) => {
  return (
    <Suspense fallback={<p></p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-code/:email" element={<VerifyCode />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path = "/congratulation" element ={<Congratulation />} />
          <Route path="/welcome" element= {<Welcome />} />
          <Route path="/first-question" element={<FirstQuestion />} />
          <Route path="/second-question" element={<SecondQuestion />} />
          <Route path="/client-second" element={<ClientSecondQuestion />} />
          <Route path="/third-question" element={<ThirdQuestion />}/>
          <Route path="/client-third" element={<ClientThirdQuestion />} />
          <Route path="/agency-first-question" element={<AgencyFirstQuestion />} />
          <Route path ="/agency-second-question" element={<AgencySecondQuestion />} />

           {/* <Route path="/sign-up" element={<SignUp />} /> */}
          
          

          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Unauthenticated
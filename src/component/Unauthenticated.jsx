import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Index";


const Login = lazy(()=> import("../pages/login/Index"))

const Unauthenticated = (props) => {
  return (
    <Suspense fallback={<p></p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Unauthenticated
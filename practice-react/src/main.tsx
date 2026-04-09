import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assests/css/global.css"

// import ForgetPassword from './pages/auth/ForgetPassword'
import RouterConfig from './config/Router'
// import HomePage from './pages/Home/HomePage.module'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HomePage /> */}
    {/* <ForgetPassword /> */}
    <RouterConfig />
  </StrictMode>
)

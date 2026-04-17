import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assests/css/global.css"

// import ForgetPassword from './pages/auth/ForgetPassword'
import RouterConfig from './config/Router'
import AuthProvider from './context/provider/AuthProvider'
import { Toaster } from 'sonner'
// import HomePage from './pages/Home/HomePage.module'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HomePage /> */}
    {/* <ForgetPassword /> */}
    <AuthProvider>              //now AuthProvider provides the data to the RouterConfig(where our whole application runs)
      <Toaster richColors closeButton />
      <RouterConfig />
    </AuthProvider>
  </StrictMode>
)

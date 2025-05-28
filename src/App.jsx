import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/contact'
import Header from "./components/Header"
import About from './Pages/About'
import Notfound from './pages/Notfound'
import Products from './pages/Products'
import Singleproduct from './pages/Singleproduct'
import Provider from './components/Provider'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import Child3 from './components/Child3'
import AuthProvider from './contexts/AuthContext'
import Users from './pages/Users'
import ProductProvider from './contexts/Productcontext'
import ProductContextPage from './pages/ProductContextPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute'
import SigninPage from './pages/SigninPage'
import ProtectAdminOnly from './components/ProtectAdminOnly'
import Admin from './pages/Admin'
import { Toaster } from 'sonner'
import VerifyEmail from './pages/VerifyEmail'
import SignupPage from './pages/SignUpPage'



const App = () => {
  return (
   <div>
    <AuthProvider>
    <ProductProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Singleproduct/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/prod' element={<ProductContextPage/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route element={<ProtectAdminOnly/>}>
          <Route path='/admin' element={<Admin/>}/>
          </Route>
        </Route>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/verify/:token' element={<VerifyEmail/>}/>
      </Routes>
    </BrowserRouter>
    </ProductProvider>
    </AuthProvider>
    <Toaster/>
   </div>
  )
}

export default App
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App

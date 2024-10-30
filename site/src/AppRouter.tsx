import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import User from './pages/user/User'
import Company from './pages/company/Company'
import Position from './pages/position/Position'
import EditUser from './pages/user/EditUser'
import EditCompany from './pages/company/EditCompany'
import EditPosition from './pages/position/EditPostion'
import Home from './components/Home'

export default function AppRouter() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path="/edit/:id" element={<EditCompany />} />
            <Route path="/users" element={<User />} />
            <Route path="/users/edit/:id" element={<EditUser />} />
            <Route path="/companies" element={<Company />}></Route>
            <Route path="/companies/edit/:id" element={<EditCompany />} />
            <Route path="/positions" element={<Position />}></Route>
            <Route path="/positions/edit/:id" element={<EditPosition />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}


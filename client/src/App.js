import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Company from './middeware/Company'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import CompanyDashbard from './pages/company/CompanyDashbard'
import PageNotFound from './pages/company/PageNotFound'
import { AuthUser } from './redux/actions/AuthAction'
import Store from './redux/Store'
import CompanyProfile from './pages/company/CompanyProfile'
import CompanyClient from './pages/company/client/CompanyClient'

const App = () => {



    useEffect(() => {
        Store.dispatch(AuthUser());
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/password/forgot' element={<ForgotPassword />} />
            <Route path='/password/reset/:uid/:token' element={<ResetPassword />} />

            {/* Company */}
            <Route path='/company/dashboard' element={<Company childern={<CompanyDashbard />} />} />
            <Route path='/company/profile' element={<Company childern={<CompanyProfile />} />} />

            <Route path='/company/clients' element={<Company childern={<CompanyClient />} />} />

            {/* Page Not Found... */}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default App
import React from 'react'
import Footer from './include/Footer'

const AuthLayout = ({ children }) => {
    return (
        <main className="main-content  mt-0">
            <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')` }} >
                <span className="mask bg-gradient-dark opacity-6"></span>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-12 mx-auto">
                            <div className="card z-index-0 fadeIn3 fadeInBottom">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default AuthLayout
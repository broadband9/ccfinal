import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps ps--active-y" id="sidenav-main" data-color="dark">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true" id="iconSidenav"></i>
                <Link to={"/company/dashboard"} className="navbar-brand m-0">
                    <img src="/assets/logo.svg" className="navbar-brand-img h-100" alt="main_logo" />
                    {/* <span className="ms-1 font-weight-bold text-white">CyberConsole</span> */}
                </Link>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div className="collapse navbar-collapse  w-auto h-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item mb-2 mt-0">
                        <a data-bs-toggle="collapse" href="#ProfileNav" className="nav-link text-white"
                            aria-controls="ProfileNav" role="button" aria-expanded="false">
                            <img src="/assets/img/team-3.jpg" className="avatar" alt='avatar' />
                            <span className="nav-link-text ms-2 ps-1">Brooklyn Alice</span>
                        </a>
                        <div className="collapse" id="ProfileNav">
                            <ul className="nav ">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/company/profile">
                                        <span className="sidenav-mini-icon"> MP </span>
                                        <span className="sidenav-normal  ms-3  ps-1"> My Profile </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white " to="">
                                        <span className="sidenav-mini-icon"> LO </span>
                                        <span className="sidenav-normal  ms-3  ps-1"> Log Out </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <hr className="horizontal light mt-0" />

                    <li className="nav-item active">
                        <NavLink className="nav-link text-white" to="/company/dashboard">
                            <i className="material-icons-round opacity-10">dashboard</i>
                            <span className="nav-link-text ms-2 ps-1">My OverView</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/company/clients">
                            <i className="material-icons-round opacity-10">group</i>
                            <span className="nav-link-text ms-2 ps-1">Clients</span>
                        </NavLink>
                    </li>




                    <li className="nav-item mt-3">
                        <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">Domains</h6>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/company/domains">
                            <i className="material-icons-round opacity-10">domain</i>
                            <span className="nav-link-text ms-2 ps-1">Domains</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#DataCentral" className="nav-link text-white "
                            aria-controls="DataCentral" role="button" aria-expanded="false">
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">dashboard</i>
                            <span className="nav-link-text ms-2 ps-1">Data Central</span>
                        </a>
                        <div className="collapse " id="DataCentral">
                            <ul className="nav ">
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="">
                                        <span className="sidenav-mini-icon"> WD </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> Whols Data </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="">
                                        <span className="sidenav-mini-icon"> DR </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> DNS Records </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="">
                                        <span className="sidenav-mini-icon"> MR </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> Mail Servers </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="">
                                        <span className="sidenav-mini-icon"> GD </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> GeolP Data </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="">
                                        <span className="sidenav-mini-icon"> WI </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> Website Intelligence </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="">
                                        <span className="sidenav-mini-icon"> SC </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> SSL Certificates </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item mt-3">
                        <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">Other</h6>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="">
                            <i className="material-icons-round opacity-10">notifications_active</i>
                            <span className="nav-link-text ms-2 ps-1">Monitoring Alerts</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="">
                            <i className="material-icons-round opacity-10">psychology</i>
                            <span className="nav-link-text ms-2 ps-1">Ai Marketing</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#MyAccount" className="nav-link text-white "
                            aria-controls="MyAccount" role="button" aria-expanded="false">
                            <i
                                className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">face</i>
                            <span className="nav-link-text ms-2 ps-1">My Account</span>
                        </a>
                        <div className="collapse " id="MyAccount">
                            <ul className="nav ">
                                <li className="nav-item ">
                                    <Link className="nav-link text-white " to="">
                                        <span className="sidenav-mini-icon"> MT </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> My Team </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white " to="">
                                        <span className="sidenav-mini-icon"> GS </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> Global Settings </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-white " to="">
                                        <span className="sidenav-mini-icon"> AL </span>
                                        <span className="sidenav-normal  ms-2  ps-1"> Audit Logs </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
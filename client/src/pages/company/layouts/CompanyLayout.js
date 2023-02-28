import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading';
import { AuthUser } from '../../../redux/actions/AuthAction';
import { baseUrl } from '../../../redux/constants/Base_URL';
import Footer from './include/Footer'

import "./Layouts.css"

const CompanyLayout = ({ children }) => {
    const dispatch = useDispatch()
    const { loading, user } = useSelector((state) => state.auth);
    const [modal, setModal] = useState(false);

    const [mode, setMode] = useState('light-version');
    const [side, setside] = useState('g-sidenav-show')

    const [theme, setTheme] = useState("g-sidenav-show bg-gray-200 light-version");
    const [sidebar, setSidebar] = useState(theme);
    const [menuIcon, setMenuIcon] = useState("menu");

    const ChnageTheme = () => {
        if (theme === "g-sidenav-show bg-gray-200 light-version") {
            setTheme(`${side} bg-gray-200 dark-version`)
            setMode("dark-version");
        } else if (theme === "g-sidenav-show bg-gray-200 dark-version") {
            setTheme(`${side} bg-gray-200 light-version`)
            setMode("light-version");
        } else {
            setTheme(`${side} bg-gray-200 light-version`)
            setMode("light-version");
        }
    }

    const SideBarToggle = () => {
        if (sidebar === "g-sidenav-show bg-gray-200 light-version") {
            setSidebar(`g-sidenav-hidden bg-gray-200 ${mode}`)
            setMenuIcon("menu_open")
            setside("g-sidenav-hidden")
        } else if (sidebar === "g-sidenav-show bg-gray-200 dark-version") {
            setSidebar(`g-sidenav-hidden bg-gray-200 ${mode}`)
            setside("g-sidenav-hidden")
            setMenuIcon("menu_open")
        } else {
            setSidebar(`g-sidenav-show bg-gray-200 ${mode}`)
            setside("g-sidenav-show")
            setMenuIcon("menu")
        }
    }


    const Logout = () => {
        toast.success("Logout Successfully...", { theme: "colored" })
        localStorage.removeItem("token");
        dispatch(AuthUser());
        // navigate(`/login`);
    }


    useEffect(() => {
        document.body.className = theme
    }, [theme])
    useEffect(() => {
        document.body.className = sidebar
    }, [sidebar])
    // eslint-disable-next-line

    return (
        loading ? <Loading /> :
            <React.Fragment>
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
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">




                    <nav className="navbar navbar-main navbar-expand-lg mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
                        id="navbarBlur" data-scroll="true">
                        <div className="container-fluid py-1 px-3">


                            <div className="sidenav-toggler sidenav-toggler-inner d-xl-block d-none ">
                                <button className="nav-link text-body p-0" style={{ border: 'none', outline: 'none', backgroundColor: "transparent" }} onClick={SideBarToggle}>
                                    <i className="material-icons-round opacity-10">{menuIcon}</i>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                    {/* <div className="input-group input-group-outline">
                                    <label className="form-label">Search here</label>
                                    <input type="text" className="form-control" />
                                </div> */}
                                </div>
                                <ul className="navbar-nav  justify-content-end">
                                    <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                        <button className="nav-link text-body p-0" style={{ border: 'none', outline: 'none', backgroundColor: "transparent" }} onClick={SideBarToggle}>
                                            <i className="material-icons-round opacity-10">{menuIcon}</i>
                                        </button>
                                    </li>
                                    <li className="nav-item px-3">
                                        <Link onClick={() => setModal("show")} to="#" className="nav-link text-body p-0">
                                            <i className="material-icons fixed-plugin-button-nav cursor-pointer">
                                                settings
                                            </i>
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown pe-2">
                                        <Link to="#" className="nav-link text-body p-0 position-relative"
                                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="material-icons cursor-pointer">
                                                notifications
                                            </i>
                                            <span
                                                className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger border border-white small py-1 px-2">
                                                <span className="small">11</span>
                                                <span className="visually-hidden">unread notifications</span>
                                            </span>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-2 me-sm-n4"
                                            aria-labelledby="dropdownMenuButton">
                                            <li className="mb-2">
                                                <Link className="dropdown-item border-radius-md" to="#">
                                                    <div className="d-flex align-items-center py-1">
                                                        <span className="material-icons">email</span>
                                                        <div className="ms-2">
                                                            <h6 className="text-sm font-weight-normal my-auto">
                                                                Check new messages
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link className="dropdown-item border-radius-md" to="#">
                                                    <div className="d-flex align-items-center py-1">
                                                        <span className="material-icons">podcasts</span>
                                                        <div className="ms-2">
                                                            <h6 className="text-sm font-weight-normal my-auto">
                                                                Manage podcast session
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item border-radius-md" to="#">
                                                    <div className="d-flex align-items-center py-1">
                                                        <span className="material-icons">shopping_cart</span>
                                                        <div className="ms-2">
                                                            <h6 className="text-sm font-weight-normal my-auto">
                                                                Payment successfully completed
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown pe-2">

                                        <Link to="#" className="nav-link text-body p-0 position-relative" id="dropdownMenuProfile" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: 20, marginTop: "-20px" }}>
                                            <img src={`${baseUrl}${user?.image}`} className="avatar" alt='' />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-2 me-sm-n4" aria-labelledby="dropdownMenuProfile">

                                            <li className="mb-2">
                                                <Link className="dropdown-item border-radius-md" to="/company/profile">
                                                    <div className="d-flex align-items-center py-1">
                                                        <span className="material-icons">face</span>
                                                        <div className="ms-2">
                                                            <h6 className="text-sm font-weight-normal my-auto">My Profile</h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <button className="dropdown-item border-radius-md" onClick={Logout}>
                                                    <div className="d-flex align-items-center py-1">
                                                        <span className="material-icons">logout</span>
                                                        <div className="ms-2">
                                                            <h6 className="text-sm font-weight-normal my-auto">Logout</h6>
                                                        </div>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid py-4">
                        {children}
                        <Footer />
                    </div>
                </main>

                <div className={`fixed-plugin ${modal}`}>
                    <Link to="#" onClick={() => setModal("show")} className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                        <i className="material-icons py-2">settings</i>
                    </Link>
                    <div className="card shadow-lg">
                        <div className="card-header pb-0 pt-3">
                            <div className="float-start">
                                <h5 className="mt-3 mb-0">BB9 UI Configurator</h5>
                                <p>BroadBand9 UI Configurator.</p>
                            </div>
                            <div className="float-end mt-4">
                                <button onClick={() => setModal("hide")} className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                    <i className="material-icons">clear</i>
                                </button>
                            </div>
                        </div>
                        <hr className="horizontal dark my-1" />
                        <div className="card-body pt-sm-3 pt-0">
                            <div>
                                <h6 className="mb-0">Sidebar Colors</h6>
                            </div>
                            <Link to="#" className="switch-trigger background-color">
                                <div className="badge-colors my-2 text-start">
                                    <span className="badge filter bg-gradient-primary active" data-color="primary"></span>
                                    <span className="badge filter bg-gradient-dark" data-color="dark"></span>
                                    <span className="badge filter bg-gradient-info" data-color="info"></span>
                                    <span className="badge filter bg-gradient-success" data-color="success"></span>
                                    <span className="badge filter bg-gradient-warning" data-color="warning"></span>
                                    <span className="badge filter bg-gradient-danger" data-color="danger"></span>
                                </div>
                            </Link>
                            <div className="mt-3">
                                <h6 className="mb-0">Sidenav Type</h6>
                                <p className="text-sm">Choose between 2 different sidenav types.</p>
                            </div>
                            <div className="d-flex">
                                <button className="btn bg-gradient-dark px-3 mb-2 active" data-class="bg-gradient-dark">Dark</button>
                                <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-transparent">Transparent</button>
                                <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-white">White</button>
                            </div>
                            <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                            <div className="mt-3 d-flex">
                                <h6 className="mb-0">Navbar Fixed</h6>
                                <div className="form-check form-switch ps-0 ms-auto my-auto">
                                    <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" />
                                </div>
                            </div>
                            <hr className="horizontal dark my-3" />
                            <div className="mt-2 d-flex">
                                <h6 className="mb-0">Sidenav Mini</h6>
                                <div className="form-check form-switch ps-0 ms-auto my-auto">
                                    <input className="form-check-input mt-1 ms-auto" type="checkbox" checked={side === "g-sidenav-hidden" ? "checked" : ""} id="navbarMinimize"
                                        onChange={SideBarToggle} />
                                </div>
                            </div>
                            <hr className="horizontal dark my-3" />
                            <div className="mt-2 d-flex">
                                <h6 className="mb-0">Light / Dark</h6>
                                <div className="form-check form-switch ps-0 ms-auto my-auto">
                                    <input className="form-check-input mt-1 ms-auto" value={theme} type="checkbox" id="dark-version"
                                        onChange={ChnageTheme} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default CompanyLayout
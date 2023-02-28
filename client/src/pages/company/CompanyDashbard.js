import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../../components/MetaData'
import CompanyLayout from './layouts/CompanyLayout'

const CompanyDashbard = () => {
    return (
        <CompanyLayout>
            <MetaData title={'Dashboard'} />
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <div className="card  mb-2">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10">group</i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Groups</p>
                                <h4 className="mb-0">50</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><Link to="/company/groups" className="text-primary text-sm font-weight-bolder">View </Link>Groups</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <div className="card  mb-2">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10">group</i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Clients</p>
                                <h4 className="mb-0">50</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><Link to="/company/clients" className="text-primary text-sm font-weight-bolder">View </Link>Clients</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <div className="card  mb-2">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10">domain</i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Domains</p>
                                <h4 className="mb-0">50</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><Link to="/company/domains" className="text-primary text-sm font-weight-bolder">View </Link>Domains</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <div className="card  mb-2">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10">group</i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Team Members</p>
                                <h4 className="mb-0">50</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><Link to="/company/teams" className="text-primary text-sm font-weight-bolder">View </Link>Team Members</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card  mb-2">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10">paid</i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Revenue Potential</p>
                                <h4 className="mb-0">50</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><Link to="/company/dashboard" className="text-primary text-sm font-weight-bolder">View </Link>Revenue Potential</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card  mb-2">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10">info</i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Alerts</p>
                                <h4 className="mb-0">50</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><Link to="/company/alerts" className="text-primary text-sm font-weight-bolder">View </Link>Alerts</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4 col-sm-6">
                    <div className="card h-100">
                        <div className="card-header pb-0 p-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">Companies</h6>
                                <button type="button"
                                    className="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title=""
                                    data-bs-original-title="See traffic channels">
                                    <i className="material-icons text-sm">priority_high</i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body pb-0 p-3 mt-4">
                            <div className="row">
                                <div className="col-7 text-start">
                                    <div className="chart">
                                        <canvas id="chart-pie" className="chart-canvas" height="200"></canvas>
                                    </div>
                                </div>
                                <div className="col-5 my-auto">
                                    <span className="badge badge-md badge-dot me-4 d-block text-start">
                                        <i className="bg-info"></i>
                                        <span className="text-dark text-xs">BroadBand9</span>
                                    </span>
                                    <span className="badge badge-md badge-dot me-4 d-block text-start">
                                        <i className="bg-primary"></i>
                                        <span className="text-dark text-xs">CyberConsole</span>
                                    </span>
                                    <span className="badge badge-md badge-dot me-4 d-block text-start">
                                        <i className="bg-dark"></i>
                                        <span className="text-dark text-xs">Arham.Co</span>
                                    </span>
                                    <span className="badge badge-md badge-dot me-4 d-block text-start">
                                        <i className="bg-secondary"></i>
                                        <span className="text-dark text-xs">Ibrahim.Co</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-6 mt-sm-0 mt-4">
                    <div className="card">
                        <div className="card-header pb-0 p-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">2023 Revenue</h6>
                                <button type="button"
                                    className="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center"
                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                    data-bs-original-title="See which ads perform better">
                                    <i className="material-icons text-sm">priority_high</i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-3">
                            <div className="chart">
                                <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Domains</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Client</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Domain</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Expiry</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">SSL</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">CMD</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Alert</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-3 py-1">
                                                    <div>
                                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system//assets/img/ecommerce/blue-shoe.jpg"
                                                            className="avatar me-3" alt="" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Arham Khan</h6>
                                                        <p className="text-sm font-weight-normal text-secondary mb-0">arham@info.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className="text-sm font-weight-normal mb-0">www.arham.com</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">10 Aug 2023</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">Yes</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">cmd</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">lorem</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">arham@info.com</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-3 py-1">
                                                    <div>
                                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system//assets/img/ecommerce/blue-shoe.jpg"
                                                            className="avatar me-3" alt="" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Arham Khan</h6>
                                                        <p className="text-sm font-weight-normal text-secondary mb-0">arham@info.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className="text-sm font-weight-normal mb-0">www.arham.com</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">10 Aug 2023</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">Yes</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">cmd</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">lorem</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">arham@info.com</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-3 py-1">
                                                    <div>
                                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system//assets/img/ecommerce/blue-shoe.jpg"
                                                            className="avatar me-3" alt="" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Arham Khan</h6>
                                                        <p className="text-sm font-weight-normal text-secondary mb-0">arham@info.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className="text-sm font-weight-normal mb-0">www.arham.com</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">10 Aug 2023</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">Yes</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">cmd</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">lorem</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">arham@info.com</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-3 py-1">
                                                    <div>
                                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system//assets/img/ecommerce/blue-shoe.jpg"
                                                            className="avatar me-3" alt="" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Arham Khan</h6>
                                                        <p className="text-sm font-weight-normal text-secondary mb-0">arham@info.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className="text-sm font-weight-normal mb-0">www.arham.com</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">10 Aug 2023</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">Yes</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">cmd</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">lorem</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">arham@info.com</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-3 py-1">
                                                    <div>
                                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system//assets/img/ecommerce/blue-shoe.jpg"
                                                            className="avatar me-3" alt="" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Arham Khan</h6>
                                                        <p className="text-sm font-weight-normal text-secondary mb-0">arham@info.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className="text-sm font-weight-normal mb-0">www.arham.com</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">10 Aug 2023</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">Yes</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">cmd</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">lorem</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">arham@info.com</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-3 py-1">
                                                    <div>
                                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system//assets/img/ecommerce/blue-shoe.jpg"
                                                            className="avatar me-3" alt="" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Arham Khan</h6>
                                                        <p className="text-sm font-weight-normal text-secondary mb-0">arham@info.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className="text-sm font-weight-normal mb-0">www.arham.com</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">10 Aug 2023</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">Yes</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">cmd</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">lorem</p></td>
                                            <td><p className="text-sm font-weight-normal mb-0">arham@info.com</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CompanyLayout>
    )
}

export default CompanyDashbard
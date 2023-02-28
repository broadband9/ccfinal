import React from 'react'

const Header = ({ title }) => {
    return (
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">{title}</h4>
                <div className="row mt-3">
                    <div className="col-2 text-center ms-auto">
                        <a className="btn btn-link px-3" href="#0">
                            <i className="fa fa-facebook text-white text-lg"></i>
                        </a>
                    </div>
                    <div className="col-2 text-center px-1">
                        <a className="btn btn-link px-3" href="#0">
                            <i className="fa fa-github text-white text-lg"></i>
                        </a>
                    </div>
                    <div className="col-2 text-center me-auto">
                        <a className="btn btn-link px-3" href="#0">
                            <i className="fa fa-google text-white text-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
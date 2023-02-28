import React from 'react'
import MetaData from './MetaData'

const Loading = () => {
    return (
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <MetaData title="Loading..." />
            <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading

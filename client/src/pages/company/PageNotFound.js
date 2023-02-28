import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../../components/MetaData'
import CompanyLayout from './layouts/CompanyLayout'

const PageNotFound = () => {
    return (
        <CompanyLayout>
            <MetaData title={'404 Page Not Found...'} />
            <div>
                <h2>404</h2>
                <h2>Page Not Found..</h2>
                <Link className='btn btn-primary' to={'/company/dashboard'}>Back</Link>
            </div>

        </CompanyLayout>
    )
}

export default PageNotFound
import React from 'react'
import { useSelector } from 'react-redux';
import RedirectLoading from './RedirectLoading';

const Company = ({ childern }) => {
    const { user } = useSelector((state) => state.auth);
    return user && user.role === "Company" ? childern : <RedirectLoading role={"Company"} />
}

export default Company

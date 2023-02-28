import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const RedirectLoading = (props) => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
            // count === 0 && toast.error(`Only ${props.role} allow to access this resource...`, { theme: "colored" });
            count === 0 && navigate("/login");

        }, 1000);
        return () => clearInterval(interval);
    }, [navigate, count, props.role])
    return (
        <Loading />
    )
}
export default RedirectLoading

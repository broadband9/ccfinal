import React, { useEffect, useState } from 'react'
import AuthLayout from './layouts/AuthLayout'
import Header from './layouts/include/Header'
import MetaData from '../../components/MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ForgotPasswordFunction } from '../../redux/actions/AuthAction'
import { toast } from 'react-toastify'
import { CLEAR_ERRORS } from '../../redux/constants/AuthConstant'
import Loading from '../../components/Loading'

const ForgotPassword = () => {

    const { errors, loading, status, message, } = useSelector((state) => state.forgotPassword);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: ""
    });

    const InpChnage = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const ForgotPasswordFormSubmit = (event) => {
        event.preventDefault();

        if (data.email === "") {
            toast.error('Email is required...', { theme: "colored" })
        } else {
            dispatch(ForgotPasswordFunction(data.email));
        }
    }



    useEffect(() => {
        if (status && status === 200) {
            toast.success(message, { theme: "colored" })
            navigate("/login")
        }
        if (errors && errors?.non_field_errors !== null) {
            toast.error("User not found with this email...", { theme: "colored" })
        }
        dispatch({ type: CLEAR_ERRORS });

    }, [dispatch, navigate, status, message, errors])





    return (
        loading ? <Loading /> :
            <AuthLayout>
                <MetaData title={'Forgot Password'} />
                <Header title={'Forgot Password'} />
                <div className="card-body">
                    <form className="text-start" method="POST" onSubmit={ForgotPasswordFormSubmit}>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Email</label>
                            <input type="email" name='email' onChange={InpChnage} value={data.email} className="form-control" placeholder="john@email.com" />
                        </div>
                        <div className="text-center">
                            <button type='submit' className="btn bg-gradient-primary w-100 my-4 mb-2">Get password reset email</button>
                        </div>
                        <p className="mt-4 text-sm text-center">
                            Back to
                            <Link to={"/login"} className="text-primary text-gradient font-weight-bold">Sign In</Link>
                        </p>
                    </form>
                </div>
            </AuthLayout>
    )
}

export default ForgotPassword
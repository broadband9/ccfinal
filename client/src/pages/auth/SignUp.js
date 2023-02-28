import React, { useEffect, useState } from 'react'
import AuthLayout from './layouts/AuthLayout'
import Header from './layouts/include/Header'
import MetaData from '../../components/MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { AuthUser, RegisterFunction } from '../../redux/actions/AuthAction'
import { CLEAR_ERRORS } from '../../redux/constants/AuthConstant'
import Loading from '../../components/Loading'

const SignUp = () => {

    const { loading, user, status, message, token, errors } = useSelector((state) => state.auth);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });

    const InpChnage = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const RegisterFormSubmit = (event) => {
        event.preventDefault();

        if (data.name === "") {
            toast.error('Name is required...', { theme: "colored" })
        } else if (data.email === "") {
            toast.error('Email is required...', { theme: "colored" })
        } else if (data.password === "") {
            toast.error('Password is required...', { theme: "colored" })
        } else if (data.passwordConfirmation === "") {
            toast.error('Confirm Password is required...', { theme: "colored" })
        } else if (data.password !== data.passwordConfirmation) {
            toast.error('Password Confirmation does not matched...', { theme: "colored" })
        } else {
            dispatch(RegisterFunction(data.name, data.email, data.password, data.passwordConfirmation));
        }
    }







    useEffect(() => {
        if (user && user.role === "Company") {
            dispatch(AuthUser());
            navigate('/company/dashboard');
        }
        if (status && status === 201) {
            toast.success(message, { theme: "colored" })
            localStorage.removeItem("token");
            localStorage.setItem("token", token.access);
            dispatch(AuthUser());
        }
        if (errors && errors?.errors?.email !== null) {
            toast.error('Company with this email already exists...', { theme: "colored" })
        }
        dispatch({ type: CLEAR_ERRORS });

    }, [dispatch, navigate, user, status, message, token, errors])





    const [checked, setChecked] = useState(true);

    return (
        loading ? <Loading /> :
            <AuthLayout>
                <MetaData title={'Sign Up'} />
                <Header title={'Sign Up'} />
                <div className="card-body">
                    <form className="text-start" method="POST" onSubmit={RegisterFormSubmit}>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Name</label>
                            <input type="text" name='name' onChange={InpChnage} value={data.name} className="form-control" placeholder="john" />
                        </div>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Email</label>
                            <input type="email" name='email' onChange={InpChnage} value={data.email} className="form-control" placeholder="john@email.com" />
                        </div>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Password</label>
                            <input type="password" name='password' onChange={InpChnage} value={data.password} className="form-control" placeholder="********" />
                        </div>

                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Confirm Password</label>
                            <input type="password" name='passwordConfirmation' onChange={InpChnage} value={data.passwordConfirmation} className="form-control" placeholder="********" />
                        </div>

                        <div className="form-check form-switch d-flex align-items-center mb-3">
                            <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked={checked === true ? "checked" : ""} />
                            <label className="form-check-label mb-0 ms-3" onClick={() => setChecked(!checked)} htmlFor="rememberMe">I agree the <Link to="" className="text-dark font-weight-bolder">Terms and Conditions </Link></label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign Up</button>
                        </div>
                        <p className="mt-4 text-sm text-center">
                            Have an account ?
                            <Link to={"/login"} className="text-primary text-gradient font-weight-bold">Sign In</Link>
                        </p>
                    </form>
                </div>
            </AuthLayout>
    )
}

export default SignUp
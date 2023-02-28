import React, { useEffect, useState } from 'react'
import AuthLayout from './layouts/AuthLayout'
import Header from './layouts/include/Header'
import MetaData from '../../components/MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AuthUser, LoginFunction } from '../../redux/actions/AuthAction'
import { toast } from 'react-toastify'
import { CLEAR_ERRORS } from '../../redux/constants/AuthConstant'
import Loading from '../../components/Loading'

const Login = () => {

    const { loading, user, status, message, token } = useSelector((state) => state.auth);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const InpChnage = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const LoginFormSubmit = (event) => {
        event.preventDefault();

        if (data.email === "") {
            toast.error('Email is required...', { theme: "colored" })
        } else if (data.password === "") {
            toast.error('Password is required...', { theme: "colored" })
        } else {
            dispatch(LoginFunction(data.email, data.password));
        }
    }







    useEffect(() => {
        if (user && user.role === "Company") {
            dispatch(AuthUser());
            navigate('/company/dashboard');
        }

        if (status && status === 203) {
            toast.success(message, { theme: "colored" })
            localStorage.removeItem("token");
            localStorage.setItem("token", token.access);
            dispatch(AuthUser());
        }
        if (status && status === 404) {
            toast.error(message, { theme: "colored" })
        }
        dispatch({ type: CLEAR_ERRORS });

    }, [dispatch, navigate, user, status, message, token])




    const [checked, setChecked] = useState(true);

    return (
        loading ? <Loading /> :
            <AuthLayout>
                <MetaData title={'Sign In'} />
                <Header title={'Sign In'} />
                <div className="card-body">
                    <form className="text-start" method="POST" onSubmit={LoginFormSubmit}>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Email</label>
                            <input type="email" name='email' onChange={InpChnage} value={data.email} className="form-control" placeholder="john@email.com" />
                        </div>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Password</label>
                            <input type="password" name='password' onChange={InpChnage} value={data.password} className="form-control" placeholder="********" />
                        </div>

                        <div className="form-check form-switch d-flex align-items-center mb-3">
                            <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked={checked === true ? "checked" : ""} />
                            <label className="form-check-label mb-0 ms-3" onClick={() => setChecked(!checked)} htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="text-center">
                            <button type='submit' className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                            <Link to={"/password/forgot"}>Forgot Passwor ?</Link>
                        </div>
                        <p className="mt-4 text-sm text-center">
                            Don't have an account?
                            <Link to={"/signup"} className="text-primary text-gradient font-weight-bold">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </AuthLayout>
    )
}

export default Login
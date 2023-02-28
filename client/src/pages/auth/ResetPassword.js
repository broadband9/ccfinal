import React, { useEffect, useState } from 'react'
import AuthLayout from './layouts/AuthLayout'
import Header from './layouts/include/Header'
import MetaData from '../../components/MetaData'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RestPasswordFunction } from '../../redux/actions/AuthAction'
import { toast } from 'react-toastify'
import { CLEAR_ERRORS } from '../../redux/constants/AuthConstant'
import Loading from '../../components/Loading'

const ResetPassword = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const params = useParams()

    const { uid, token } = params;

    const { errors, loading, status, message, } = useSelector((state) => state.forgotPassword);


    const [data, setData] = useState({
        password: "",
        password2: "",
    });

    const InpChnage = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const ResetPasswordFormSubmit = (event) => {
        event.preventDefault();

        if (data.password === "") {
            toast.error('Password is required...', { theme: "colored" })
        } else if (data.password2 === "") {
            toast.error('Confirm Password is required...', { theme: "colored" })
        } else if (data.password !== data.password2) {
            toast.error('Password Confirmation does not matched...', { theme: "colored" })
        } else {
            dispatch(RestPasswordFunction(data.password, data.password2, uid, token));
        }
    }



    useEffect(() => {
        if (status && status === 200) {
            toast.success(message, { theme: "colored" })
            navigate("/login")
        }
        if (errors && errors?.non_field_errors !== null) {
            toast.error("Token is not Valid or Expired...", { theme: "colored" })
        }
        dispatch({ type: CLEAR_ERRORS });

    }, [dispatch, navigate, status, message, errors])





    return (
        loading ? <Loading /> :
            <AuthLayout>
                <MetaData title={'Reset Password'} />
                <Header title={'Reset Password'} />
                <div className="card-body">
                    <form className="text-start" method="POST" onSubmit={ResetPasswordFormSubmit}>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>New Password</label>
                            <input type="password" name='password' onChange={InpChnage} value={data.password} className="form-control" placeholder="**********" />
                        </div>
                        <div className="input-group input-group-static mb-4 my-3">
                            <label>Confirm Password</label>
                            <input type="password" name='password2' onChange={InpChnage} value={data.password2} className="form-control" placeholder="**********" />
                        </div>
                        <div className="text-center">
                            <button type='submit' className="btn bg-gradient-primary w-100 my-4 mb-2">Reset Password</button>
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

export default ResetPassword
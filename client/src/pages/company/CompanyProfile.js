import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'
import MetaData from '../../components/MetaData'
import { AuthUser, PasswordUpdateFunction, ProfileUpdateFunction } from '../../redux/actions/AuthAction'
import { UPDATE_PASSWORD_RESET } from '../../redux/constants/AuthConstant'
import { baseUrl } from '../../redux/constants/Base_URL'
import CompanyLayout from './layouts/CompanyLayout'

const CompanyProfile = () => {

    const { loading, user } = useSelector((state) => state.auth);
    const { isUpdated, message, loading: profileLoading } = useSelector((state) => state.profile);

    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: user?.name,
        email: user?.email,
        test: user?.company_name,
        address_first_line: user?.address_first_line,
        address_second_line: user?.address_second_line,
        address_town_city: user?.address_town_city,
        address_country_code: user?.address_country_code,
        address_country: user?.address_country,
        image: user?.image
    });

    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);

    const [image, setImage] = useState(user?.image);
    const [imagePreview, setImagePreview] = useState(`${baseUrl}${data.image}`)

    const InpChnage = (event) => {
        if (event.target.name === "image") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePreview(reader.result);
                    setImage(event.target.files[0]);
                }
            };
            reader.readAsDataURL(event.target.files[0]);

        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const UpdatePasswordForm = (event) => {
        event.preventDefault();

        if (password === null) {
            toast.error('Password is required...', { theme: "colored" })
        } else if (password2 === null) {
            toast.error('Confirm Password is required...', { theme: "colored" })
        } else if (password !== password2) {
            toast.error('Password Confirmation does not matched...', { theme: "colored" })
        } else {
            dispatch(PasswordUpdateFunction(password, password2));
        }
    }
    const UpdateProfileForm = (event) => {
        event.preventDefault();

        if (data.name === "") {
            toast.error('Name is required...', { theme: "colored" })
        } else if (data.email === "") {
            toast.error('Email is required...', { theme: "colored" })
        } else if (data.test === "") {
            toast.error('Company name is required...', { theme: "colored" })
        } else if (data.address_first_line === "") {
            toast.error('Address first line is required...', { theme: "colored" })
        } else if (data.address_town_city === "") {
            toast.error('Town / City is required...', { theme: "colored" })
        } else if (data.address_country_code === "") {
            toast.error('Country code is required...', { theme: "colored" })
        } else if (data.address_country === "") {
            toast.error('Country is required...', { theme: "colored" })
        } else {


            const form = new FormData();
            form.append("name", data.name);
            form.append("email", data.email);
            form.append("company_name", data.test);
            form.append("address_first_line", data.address_first_line);
            form.append("address_second_line", data.address_second_line);
            form.append("address_town_city", data.address_town_city);
            form.append("address_country_code", data.address_country_code);
            form.append("address_country", data.address_country);
            form.append("image", image);
            console.log(form);

            dispatch(ProfileUpdateFunction(form));
        }
    }


    useEffect(() => {
        if (isUpdated && isUpdated === true) {
            toast.success(message, { theme: "colored" })
            dispatch({ type: UPDATE_PASSWORD_RESET })
            dispatch(AuthUser());
        }
    }, [dispatch, isUpdated, message])
    return (
        profileLoading || loading ? <Loading /> :
            <CompanyLayout>
                <MetaData title={'Profile'} />
                <div className="row mb-5">
                    <div className="col-lg-3">
                        <div className="card position-sticky top-1">
                            <ul className="nav flex-column bg-white border-radius-lg p-3">
                                <li className="nav-item">
                                    <a className="nav-link text-dark d-flex" data-scroll="" href="#profile">
                                        <i className="material-icons text-lg me-2">person</i>
                                        <span className="text-sm">Profile</span>
                                    </a>
                                </li>
                                <li className="nav-item pt-2">
                                    <a className="nav-link text-dark d-flex" data-scroll="" href="#basic-info">
                                        <i className="material-icons text-lg me-2">receipt_long</i>
                                        <span className="text-sm">Basic Info</span>
                                    </a>
                                </li>
                                <li className="nav-item pt-2">
                                    <a className="nav-link text-dark d-flex" data-scroll="" href="#password">
                                        <i className="material-icons text-lg me-2">lock</i>
                                        <span className="text-sm">Change Password</span>
                                    </a>
                                </li>
                                <li className="nav-item pt-2">
                                    <a className="nav-link text-dark d-flex" data-scroll="" href="#delete">
                                        <i className="material-icons text-lg me-2">delete</i>
                                        <span className="text-sm">Delete Account</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 mt-lg-0 mt-4">
                        <div className="card card-body" id="profile">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-sm-auto col-4">
                                    <div className="avatar avatar-xl position-relative">
                                        <img src={imagePreview} alt="bruce" className="w-100 rounded-circle shadow-sm" />
                                    </div>
                                </div>
                                <div className="col-sm-auto col-8 my-auto">
                                    <div className="h-100">
                                        <h5 className="mb-1 font-weight-bolder">{user?.name}</h5>
                                        <p className="mb-0 font-weight-normal text-sm">{user?.company_name}</p>
                                    </div>
                                </div>
                                <div className="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">


                                </div>
                            </div>
                        </div>



                        <div className="card mt-4" id="basic-info">
                            <div className="card-header">
                                <h5>Basic Info</h5>
                            </div>
                            <div className="card-body pt-0">
                                <form method='POST' onSubmit={UpdateProfileForm}>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Name</label>
                                                <input type="text" name='name' value={data.name} onChange={InpChnage} className="form-control" placeholder="Name..." />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Email</label>
                                                <input type="email" name='email' value={data.email} onChange={InpChnage} className="form-control" placeholder="Email..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Company Name</label>
                                                <input type="text" name='test' value={data.test} onChange={InpChnage} className="form-control" placeholder="Company Name..." />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Address First Line</label>
                                                <input type="text" name='address_first_line' value={data.address_first_line} onChange={InpChnage} className="form-control" placeholder="Address First Line..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Address Second Line</label>
                                                <input type="text" name='address_second_line' value={data.address_second_line} onChange={InpChnage} className="form-control" placeholder="Address Second Line..." />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Town / City</label>
                                                <input type="text" name='address_town_city' value={data.address_town_city} onChange={InpChnage} className="form-control" placeholder="Town / City..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Country</label>
                                                <input type="text" name='address_country_code' value={data.address_country_code} onChange={InpChnage} className="form-control" placeholder="Country..." />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="input-group input-group-static">
                                                <label>Country Code</label>
                                                <input type="text" name='address_country' value={data.address_country} onChange={InpChnage} className="form-control" placeholder="Country Code..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <div className="input-group input-group-static">
                                                <label>Image</label>
                                                <input accept='image/*' type="file" name='image' onChange={InpChnage} className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <button type='submit' className="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Update Profile</button>
                                </form>
                            </div>
                        </div>


                        <div className="card mt-4" id="password">
                            <div className="card-header">
                                <h5>Change Password</h5>
                            </div>
                            <div className="card-body pt-0">

                                <form method='POST' onSubmit={UpdatePasswordForm}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group input-group-static">
                                                <label>New Password</label>
                                                <input type="text" name='password' value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" placeholder="New Password..." />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <div className="input-group input-group-static">
                                                <label>Confirm Password</label>
                                                <input type="text" name='password2' value={password2} onChange={(event) => setPassword2(event.target.value)} className="form-control" placeholder="Confirm Password..." />
                                            </div>
                                        </div>

                                    </div>

                                    <h5 className="mt-5">Password requirements</h5>
                                    <p className="text-muted mb-2">
                                        Please follow this guide for a strong password:
                                    </p>
                                    <ul className="text-muted ps-4 mb-0 float-start">
                                        <li>
                                            <span className="text-sm">One special characters</span>
                                        </li>
                                        <li>
                                            <span className="text-sm">Min 6 characters</span>
                                        </li>
                                        <li>
                                            <span className="text-sm">One number (2 are recommended)</span>
                                        </li>
                                        <li>
                                            <span className="text-sm">Change it often</span>
                                        </li>
                                    </ul>
                                    <button className="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Update password</button>
                                </form>
                            </div>
                        </div>


                        <div className="card mt-4" id="delete">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-sm-0 mb-4">
                                    <div className="w-50">
                                        <h5>Delete Account</h5>
                                        <p className="text-sm mb-0">Once you delete your account, there is no going back. Please
                                            be certain.</p>
                                    </div>
                                    <div className="w-50 text-end">
                                        <button className="btn btn-outline-secondary mb-3 mb-md-0 ms-auto" type="button"
                                            name="button">Deactivate</button>
                                        <button className="btn bg-gradient-danger mb-0 ms-2" type="button" name="button">Delete
                                            Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </CompanyLayout>
    )
}

export default CompanyProfile
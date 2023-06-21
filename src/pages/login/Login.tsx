import React from 'react'
import InputField from '../../components/common/InputField/InputField'

const Login = () => {
    return (
        <div className='login-wrapper'>
            <div className="login-form">
                <h6 className='login-heading'>Login</h6>
                <InputField label={"Username"} type={"text"} />
                <InputField label={"Password"} type={"password"} />
                <button className="btn btn-success btn-block mt-5x">Login</button>
            </div>
        </div>
    )
}

export default Login
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function LoginPage() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("roroh903@naver.com");
    const [Password, setPassword] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email : Email,
            password : Password
        }
        dispatch(loginUser(body))

    }



    return (
        <div style={{ width: '300px', height : '700px', margin : '100px auto' }}>
            <form style={{ display: 'flex', flexDirection : 'column' }} onSubmit={onSubmitHandler}
            >
                <label>E-mail</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange ={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>  
       
    )
}

export default LoginPage

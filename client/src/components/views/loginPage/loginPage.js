import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {
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
        dispatch(loginUser(body)).then(response => {
            if( response.payload.loginSuccess ) {
                alert('님 환영합니다.');
                props.history.push("/");
            }
        })

    }



    return (
        <div style={{ display: 'flex', justifyContent : 'center', alignItem: 'center', width: '100%', height: '100vh' }}>
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

export default withRouter(LoginPage)

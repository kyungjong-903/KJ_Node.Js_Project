import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';


function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordConfirm, setPasswordConfirm] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onPasswordConfirmHandler = (e) => {
        setPasswordConfirm(e.currentTarget.value)
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(Password !== PasswordConfirm) {
            return alert('비밀번호가 다릅니다!')
        }

        let body = {
            email : Email,
            name: Name,
            password : Password
        }
        dispatch(registerUser(body))
        .then(response => {
            if( response.payload.success ) {
                props.history.push("/login");
            }else {
                alert("Failed to sign up...");
            }
        })

    }

    
    return (
        <div style={{ display: 'flex', justifyContent : 'center', alignItem: 'center', width: '100%', height: '100vh' }}>
        <form style={{ display: 'flex', flexDirection : 'column' }} onSubmit={onSubmitHandler}
        >
            <label>E-mail</label>
            <input type="email" value={Email} onChange={onEmailHandler} />

            <label>Name</label>
            <input type="text" value={Name} onChange={onNameHandler} />

            <label>Password</label>
            <input type="password" value={Password} onChange ={onPasswordHandler} />

            <label>Password Confirm</label>
            <input type="password" value={PasswordConfirm} onChange ={onPasswordConfirmHandler} />

            <br />
            <button type="submit">
                Register
            </button>
        </form>
    </div>
    )
}

export default RegisterPage

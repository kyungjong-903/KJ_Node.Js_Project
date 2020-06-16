import React from 'react';
import axios from 'axios';

function landingPage() {

    const conClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                alert("성공");
            }else {
                alert("실패");
            }
        })
    }

    return (
        <div style={{ display: 'flex', justifyContent : 'center', alignItem: 'center', width: '100%', height: '100vh' }}>
            <button onClick={conClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default landingPage

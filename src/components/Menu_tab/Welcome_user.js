import React from 'react'
import './Welcome_user.css'

const a = "가나다"

export default function Welcome_user() {
    return (
        
        <div>
            <div className='welcome_text'>
                <span className='user_name'>{a}</span>님,
                <div>반갑습니다!</div>
            </div>
        </div>
    )
}

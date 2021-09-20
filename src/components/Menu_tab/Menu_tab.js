import React from 'react'
import { CenterFlexDiv } from '../../assets/styles/basic.style'

import Welcome_user from './Welcome_user'

import './Menu_tab.css'

export default function Menu_tab() {
    return (
        <CenterFlexDiv>
        <div className='back'>

            <Welcome_user />
        <ul>
            <li>MY NFT</li>
            <li>결제내역</li>
            <li>관심상품</li>
            <li>회원정보</li>
        </ul>


        </div>
        </CenterFlexDiv>
    )
}

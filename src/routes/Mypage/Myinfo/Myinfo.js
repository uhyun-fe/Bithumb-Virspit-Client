import { Radio } from "@material-ui/core";
import React from "react";
import {MyinfoForm, User_Form, InputLabel, RadioLabel, Left_Flex_Div } from './Myinfo.style.js';
import { CenterColumnFlexDiv, Button } from "../../../assets/styles/basic.style";


const emaila = "test@test.com"


const Myinfo = () => {
   return (
      <CenterColumnFlexDiv>
      <MyinfoForm>
         <h2>회원정보 수정</h2>
      
         <User_Form>
               <InputLabel>
                  이름 <input></input>
               </InputLabel>
            
               <InputLabel>
                 성별
                  <Left_Flex_Div>
                     <RadioLabel>
                        <input type="radio" name="gender" value="woman" />
                        여자
                     </RadioLabel>

                     <RadioLabel>
                        <input type="radio" name="gender" value="man" />
                         남자 
                     </RadioLabel>

                     <RadioLabel>
                        <input type="radio" name="gender" value="another" />
                        기타
                     </RadioLabel>
                  </Left_Flex_Div>
               </InputLabel>

            <InputLabel>
               이메일
               <span>{emaila}</span>
            </InputLabel>

            
            <InputLabel>
               연락처
               <input></input>
               <Button>변경</Button>
            </InputLabel>

            <InputLabel>
               생년월일
               <input></input>
               <Button>변경</Button>
            </InputLabel>

            <InputLabel>
               현재 비밀번호
               <input></input>
            </InputLabel>

            <InputLabel>
               신규 비밀번호
               <input></input>
            </InputLabel>

            <InputLabel>
               신규 비밀번호 확인
               <input></input>
               <Button>변경</Button>
            </InputLabel>

         </User_Form>
      </MyinfoForm>
      </CenterColumnFlexDiv>
   );
};




export default Myinfo;

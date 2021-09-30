import React from "react";

// Styles
import { MyinfoForm, User_Form, InputLabel, RadioLabel, Left_Flex_Div } from "./Myinfo.style.js";
import { CenterColumnFlexDiv, Button } from "../../../assets/styles/basic.style";
import MyinfoLogic from "./Myinfo.logic.js";

const Myinfo = () => {
   const { state, setBasicInfo, updateBasicInfo, updatePasswordInfo } = MyinfoLogic();
   return (
      <CenterColumnFlexDiv>
         <MyinfoForm>
            <h2>회원정보 수정</h2>

            <User_Form>
               <h3>기본정보 수정</h3>
               <InputLabel>
                  이메일
                  <span>{state.basic.email}</span>
               </InputLabel>
               <InputLabel>
                  이름 <input type="text" value={state.basic.name || ""} onChange={({ target: { value } }) => setBasicInfo({ key: "name", value })} />
               </InputLabel>
               <InputLabel>
                  연락처
                  <input type="text" value={state.basic.phone || ""} onChange={({ target: { value } }) => setBasicInfo({ key: "phone", value })} />
               </InputLabel>
               <InputLabel>
                  성별
                  <Left_Flex_Div>
                     <RadioLabel>
                        <input
                           type="radio"
                           name="gender"
                           value="woman"
                           checked={state.basic.gender === "woman"}
                           onChange={({ target: { checked } }) => checked && setBasicInfo({ key: "gender", value: "woman" })}
                        />
                        여자
                     </RadioLabel>

                     <RadioLabel>
                        <input
                           type="radio"
                           name="gender"
                           value="man"
                           checked={state.basic.gender === "man"}
                           onChange={({ target: { checked } }) => checked && setBasicInfo({ key: "gender", value: "man" })}
                        />
                        남자
                     </RadioLabel>

                     <RadioLabel>
                        <input
                           type="radio"
                           name="gender"
                           value="another"
                           checked={state.basic.gender === "another"}
                           onChange={({ target: { checked } }) => checked && setBasicInfo({ key: "gender", value: "another" })}
                        />
                        기타
                     </RadioLabel>
                  </Left_Flex_Div>
               </InputLabel>
               <InputLabel>
                  생년월일
                  <input
                     type="text"
                     value={state.basic.birthday || ""}
                     onChange={({ target: { value } }) => setBasicInfo({ key: "birthday", value })}
                  />
               </InputLabel>
               <Button onClick={updateBasicInfo}>변경</Button>
            </User_Form>
            <User_Form>
               <h3>비밀번호 수정</h3>
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
               </InputLabel>
               <Button onClick={updatePasswordInfo}>변경</Button>
            </User_Form>
         </MyinfoForm>
      </CenterColumnFlexDiv>
   );
};

export default Myinfo;

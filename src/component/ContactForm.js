import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault(); //새로고침 막아주기
    dispatch({type:"ADD_CONTACT",  payload:{name, phoneNumber}}) //action값 설정 -> reducer로 이동

  };

  return (
    <div>
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text"
         placeholder="이름을 입력해주세요"
          onChange={(event)=>setName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number"
         placeholder="전화번호를 입력해주세요" 
         onChange={(event)=>setPhoneNumber(event.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
  );
};
//button의 type값이 submit일 경우 onClick이아닌 onSubmit으로 동작할것!
//onSubmit은 Form에서 동작함.
export default ContactForm;

import React, {useState} from 'react'
import {Row, Col, Form, Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';


const SearchBox = () => {
  let dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
 let {contactList} = useSelector((state)=>state);
 console.log("contact",contactList)

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({type : "SEARCH_BY_USERNAME", payload : {keyword}});
  }

  return (
    <Form onSubmit={searchByName}>
    <Row>
      <Col lg={10}>
      <Form.Control type="text"
       placeholder="이름을 입력해주세요"
       onChange={(event)=>setKeyword(event.target.value)}/>
      </Col>
      <Col lg={2}>
      <Button type="submit">Search</Button>
      </Col>

    </Row>
    </Form>
  )
}

export default SearchBox
import React from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
const TodoSearch = () => {
  return (
    <InputGroup>
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username with two button addons"
      />
      <Button variant="outline-secondary">검색하기</Button>
      <Button variant="outline-secondary">초기화</Button>
    </InputGroup>
  )
}

export default TodoSearch

import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
const TodoInput = () => {
  return (
    <InputGroup>
      <InputGroup.Text>With textarea</InputGroup.Text>
      <Form.Control as="textarea" aria-label="With textarea" />
      <Button variant="outline-secondary">추가하기</Button>
    </InputGroup>
  )
}

export default TodoInput

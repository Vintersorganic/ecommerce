import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Annoucenment = () => {
  return (
    <Container>
      ¡Aprovechá las rebajas del Black Friday! Envío gratis desde los 3000$ a todo Argentina.
    </Container>
  )
}

export default Annoucenment

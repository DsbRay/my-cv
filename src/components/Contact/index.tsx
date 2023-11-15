import React from 'react'

import styled from 'styled-components'
import svLogo from '../../images/shareValueLogo.svg'

const ContactPage = () => {
  return (
    <Container>
      <div className='block'>
        <h2>Contact Me</h2>
        <p>
          I work on a consultancy basis via ShareValue. If you have any projects that could use some additional support
          I would love to get in contact.
        </p>
        <p>Please contact through ShareValue</p>
        <a href='https://www.sharevalue.nl/contact'>
          <img src={svLogo} />
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .block {
    padding: 20px;
    background-color: var(--black);
    color: var(--white);
    text-align: center;
    h2 {
      font-size: 34px;
    }
    p {
      padding: 20px 0;
    }
    a {
      transition: opacity 0.25s ease;
      &:hover {
        opacity: 0.6;
      }
    }
    img {
      max-width: 200px;
    }
  }
`

export default ContactPage

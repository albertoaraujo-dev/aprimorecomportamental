import React from 'react'
import styled from 'styled-components'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from '../common/Button'
import { CSS_MEDIA_QUERY } from '../../theme/consts'
import { useMediaQuery } from '../../helpers/customHooks'

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textWhite};
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`

const StyledDescription = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin: 0 auto;
  padding: 0 20px;

  a {
    text-decoration: none;
    margin-bottom: 10px;
  }
  a:visited {
    color: #737373;
  }
`

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 270px;

  @media ${CSS_MEDIA_QUERY.MIN_MOBILE_L} {
    width: 350px;
  }
`

const Footer: React.FC = () => {
  const { isMobile } = useMediaQuery()
  const buttonSize = isMobile ? 'normal' : 'large'
  return (
    <FooterWrapper>
      <ContactButtonsWrapper>
        <Button
          iconName={faPhone}
          href='tel:+5511941980505'
          type='contact'
          ariaLabel='Telefone'
          size={buttonSize}
        />
        <Button
          iconName={faWhatsapp}
          href='https://api.whatsapp.com/send?phone=5511941980505'
          type='contact'
          ariaLabel='Whatsapp'
          size={buttonSize}
        />
        <Button
          iconName={faInstagram}
          href='https://www.instagram.com/aprimore.terapiacomportamental/'
          type='contact'
          ariaLabel='Instagram'
          size={buttonSize}
        />
        <Button
          iconName={faEnvelope}
          href='mailto:contato@aprimorecomportamental.com.br'
          type='contact'
          ariaLabel='E-mail'
          size={buttonSize}
        />
      </ContactButtonsWrapper>
      <StyledDescription>
        <a
          href='https://www.google.com/maps/place/Av.+Imperatriz+Leopoldina,+263+-+Nova+Petr%C3%B3polis,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09770-271/@-23.7041254,-46.5509947,17z/data=!4m5!3m4!1s0x94ce422eb5bcd407:0x6663bb3d2ac560b1!8m2!3d-23.7041303!4d-46.548806'
          target='_blank'
          rel='noopener noreferrer'
        >
          Av. Imperatriz Leopoldina, 263 - Nova Petrópolis, São Bernardo do
          Campo - SP, 09770-271 - Sala 24, Segundo andar
        </a>{' '}
        <p>Todos os direitos reservados © 2022</p>
      </StyledDescription>
    </FooterWrapper>
  )
}

export default Footer

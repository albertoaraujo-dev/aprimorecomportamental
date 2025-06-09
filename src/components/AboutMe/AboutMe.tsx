import React from 'react'
import styled from 'styled-components'
import SectionLayout from '../common/SectionLayout'
import { Section } from '../../consts'
import foto from './foto-soraya.jpg'
import fotojosy from './foto-josy.jpg'
import fototati from './foto-tati.jpg'
import Button from '../common/Button'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { CSS_MEDIA_QUERY } from '../../theme/consts'

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media ${CSS_MEDIA_QUERY.MIN_MOBILE_L} {
    width: 350px;
  }
`
const AboutMeWrapper = styled.div`
  max-width: 700px;
  padding: 0 50px;
`
const StyledTitle = styled.h1`
  margin: 10px 0;
`
const StyledText = styled.p`
  line-height: 24px;
  margin: 10px;
`
const StyledImage = styled.img`
  width: 18rem;
  height: 18rem;
  margin-top: 40px;
  border-radius: 50%;
`
const AboutMe: React.FC = () => (
  <SectionLayout id={Section.AboutMe} title='Quem somos'>
    <AboutMeWrapper>
      <StyledImage src={fototati} alt='foto'></StyledImage>
      <StyledTitle>Tatiana Martins da Silva</StyledTitle>
      <StyledText>
        Terapeuta ABA graduada em pedagogia pela FASB, pós graduada em
        psicopedagogia pela UMESP e em análise do comportamento aplicada ao
        autismo e desenvolvimento atípico pela UFSCar. Também possui formação em
        habilidades de estudos e em ensino de habilidades sociais pelo Centro
        Paradigma Ciências do Comportamento e curso de extensão em neurociências
        pela PUC. Atuou em sala de aula por 18 anos. Atua em psicopedagogia e
        ABA há 7 anos, realizando atendimento domiciliar, em escolas ou clínico.
        Oferece supervisão de casos e realiza orientação educacional para
        coordenação e professores baseado em ABA para o manejo de comportamentos
        na escola. Atuação em estimulação precoce baseado no modelo Denver ABA.
        Realiza treinos de habilidades acadêmicas e organização de estudos e
        materiais bem como a adaptação de materiais acadêmicos. É experiente em
        alfabetização baseada em conceitos da ciência do comportamento e em
        orientação de pais para o manejo comportamental da criança e ensino de
        habilidades sociais. Desenvolvimento de repertório de crianças com
        Transtorno do Desenvolvimento de Linguagem (TDL) e TEA, Transtorno do
        Deficit de Atenção e Hiperatividade (TDAH) dificuldades de aprendizagem
        e questões comportamentais e outros diagnósticos que comprometem a
        atenção, organização e dificuldade em generalizar o aprendizado.
      </StyledText>
      <ContactButtonsWrapper>
        <Button
          iconName={faPhone}
          href='tel:+5511976568073'
          type='contact'
          ariaLabel='Telefone'
        />
        <Button
          iconName={faWhatsapp}
          href='https://api.whatsapp.com/send?phone=5511976568073'
          type='contact'
          ariaLabel='Whatsapp'
        />
        <Button
          iconName={faInstagram}
          href='https://www.instagram.com/martinsdasilvatatiana/'
          type='contact'
          ariaLabel='Instagram'
        />
        <Button
          iconName={faEnvelope}
          href='mailto:tatianaaba@hotmail.com'
          type='contact'
          ariaLabel='E-mail'
        />
      </ContactButtonsWrapper>

      <StyledImage src={foto} alt='foto'></StyledImage>
      <StyledTitle>Soraya da Silva Oliveira</StyledTitle>
      <StyledTitle>CRP 06/172972</StyledTitle>
      <StyledText>
        Psicóloga graduada pela Faculdade Anhanguera de São Bernardo, pós
        graduanda no curso de análise do comportamento aplicada para autismo e
        deficiência intelectual pelo <i>Child Behavior Institute of Miami</i>{' '}
        (CBI). Atua como acompanhante terapêutica (AT) em ambiente domiciliar de
        crianças com desenvolvimento atípico, também já tendo atuado em ambiente
        escolar. Realiza atendimentos em psicoterapia infantil e de adolescentes
        em clínica sob supervisão da Análise do Comportamento. É parte
        integrante de um grupo que realiza treinamento de habilidades parentais
        para pais de crianças com desenvolvimento atípico, o qual tem um e-book
        lançado.
      </StyledText>
      <ContactButtonsWrapper>
        <Button
          iconName={faPhone}
          href='tel:+5511957980599'
          type='contact'
          ariaLabel='Telefone'
        />
        <Button
          iconName={faWhatsapp}
          href='https://api.whatsapp.com/send?phone=5511957980599'
          type='contact'
          ariaLabel='Whatsapp'
        />
        <Button
          iconName={faInstagram}
          href='https://www.instagram.com/soraya.oliveirapsi/'
          type='contact'
          ariaLabel='Instagram'
        />
        <Button
          iconName={faEnvelope}
          href='mailto:sooliveira2009@gmail.com'
          type='contact'
          ariaLabel='E-mail'
        />
      </ContactButtonsWrapper>

      <StyledImage src={fotojosy} alt='foto'></StyledImage>
      <StyledTitle>Josita Rodrigues da Silva</StyledTitle>
      <StyledTitle>CRP 06/174718</StyledTitle>
      <StyledText>
        Psicóloga graduada pela Faculdade Anhanguera de São Bernardo, cursou a
        formação em análise do comportamento aplicada para pais e aplicadores e
        habilidade social para adolescentes e adultos com TEA pela Academia do
        Autismo. Possui capacitação do protocolo de avaliação VB-MAPP,
        comportamento verbal avançado e habilidade de ouvinte pelo Instituto de
        Educação e Análise do Comportamento (IEAC). É pós graduanda em análise
        do comportamento aplicada para o transtorno do espectro autista pela
        Faculdade Metropolitana. Realizou atendimento voluntário de crianças com
        desenvolvimento atípico em ONG. Estuda e recebe supervisão em análise do
        comportamento aplicada desde 2014, quando seu filho recebeu o
        diagnóstico de TEA.
      </StyledText>
      <ContactButtonsWrapper>
        <Button
          iconName={faPhone}
          href='tel:+5511964980777'
          type='contact'
          ariaLabel='Telefone'
        />
        <Button
          iconName={faWhatsapp}
          href='https://api.whatsapp.com/send?phone=5511964980777'
          type='contact'
          ariaLabel='Whatsapp'
        />
        <Button
          iconName={faInstagram}
          href='https://www.instagram.com/josita.psico/'
          type='contact'
          ariaLabel='Instagram'
        />
        <Button
          iconName={faEnvelope}
          href='mailto:josita.psico@outlook.com'
          type='contact'
          ariaLabel='E-mail'
        />
      </ContactButtonsWrapper>
    </AboutMeWrapper>
  </SectionLayout>
)
export default AboutMe

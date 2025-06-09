import React from 'react'
import styled from 'styled-components'
import SectionLayout from '../common/SectionLayout'
import { Section } from '../../consts'
import fotorecep from './recep.jpg'
import fotosala1 from './sala1.jpg'
import fotosala2 from './sala2.jpg'
import fotocorredor from './corredor.jpg'

const TitleWrapper = styled.div`
  max-width: 700px;
  padding: 0 50px;
`
const StyledText = styled.p`
  line-height: 24px;
`
const StyledImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
`
const StyledImage = styled.img`
  width: 13rem;
  height: 13rem;
  margin: 20px;
  border-radius: 50%;
`
const Title: React.FC = () => (
  <SectionLayout id={Section.Title} title='Aprimore'>
    <TitleWrapper>
      <StyledImages>
        <StyledImage src={fotorecep} alt='foto'></StyledImage>
        <StyledImage src={fotosala1} alt='foto'></StyledImage>
        <StyledImage src={fotosala2} alt='foto'></StyledImage>
        <StyledImage src={fotocorredor} alt='foto'></StyledImage>
      </StyledImages>
      <StyledText>
        O <b>APRIMORE</b> Desenvolvimento Humano e Saúde Mental é um espaço que
        oferece atendimentos em psicoterapia, psicopedagogia e Acompanhamento
        Terapêutico com embasamento na Análise do Comportamento. Atuamos com o
        público infantil, adolescentes, adultos e realizamos Orientação
        Parental. Temos como principal objetivo a promoção de competência
        socioemocional e saúde mental através do processo psicoterapêutico bem
        como o desenvolvimento de habilidades em crianças com desenvolvimento
        atípico, dificuldades e ou transtornos de aprendizagem. O
        desenvolvimento atípico infantil é aquele em que a criança apresenta as
        habilidades e os pré-requisitos dos marcos do desenvolvimento diferentes
        do esperado da faixa de idade em que se encontra, de forma leve a
        acentuada, podendo haver deficits ou excessos comportamentais.
      </StyledText>
    </TitleWrapper>
  </SectionLayout>
)
export default Title

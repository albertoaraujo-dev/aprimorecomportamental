import React, { useState } from 'react'
import { StyledBanner, StyledHeader } from './style'

import Sidebar from './Sidebar'
import { useMediaQuery } from '../../helpers/customHooks'
import Navbar from './Navbar'

import styled from 'styled-components'
import foto from './logo.png'

const StyledImage = styled.img`
  margin-top: 15vh;
  /* width: 30rem;
  height: 25rem; */
  @media (max-width: 496px) {
    width: 25rem;
    height: 20rem;
  }
`

const Header: React.FC = () => {
  const { isTablet } = useMediaQuery()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  //asas
  return (
    <StyledHeader>
      <Navbar toggleSidebar={toggleSidebar} />
      {isTablet && isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <StyledBanner>
        <StyledImage src={foto} alt='foto'></StyledImage>
      </StyledBanner>
    </StyledHeader>
  )
}

export default Header

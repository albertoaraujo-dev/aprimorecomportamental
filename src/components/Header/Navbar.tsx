import React from 'react'
import { StyledHamburgerIcon, StyledNavbar, StyledNavbarMenu } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NAVBAR_HEIGHT, Section } from '../../consts'
import {
  useMediaQuery,
  useWindowScrollYPosition,
  useWindowSize,
} from '../../helpers/customHooks'
import MenuItem from './MenuItem'

type Props = {
  toggleSidebar: () => void
}

const Navbar: React.FC<Props> = ({ toggleSidebar }: Props) => {
  const { isTablet } = useMediaQuery()
  const windowSize = useWindowSize()
  const windowScrollYPosition = useWindowScrollYPosition()

  const isScrolledOverHeader =
    windowScrollYPosition > windowSize.height / 2 - NAVBAR_HEIGHT

  return (
    <StyledNavbar isScrolledOverHeader={isScrolledOverHeader}>
      {isScrolledOverHeader ? <h1>Aprimore</h1> : <div />}
      {isTablet ? (
        <StyledHamburgerIcon
          onClick={toggleSidebar}
          aria-label='Open sidebar menu'
        >
          <FontAwesomeIcon icon={faBars} aria-hidden='true' />
        </StyledHamburgerIcon>
      ) : (
        <StyledNavbarMenu>
          <MenuItem href={`#${Section.AboutMe}`} title='Quem somos' />
          <MenuItem href={`#${Section.Skills}`} title='Especialidades' />
          {/* <MenuItem href={`#${Section.Projects}`} title="Contato" /> */}
        </StyledNavbarMenu>
      )}
    </StyledNavbar>
  )
}

export default Navbar

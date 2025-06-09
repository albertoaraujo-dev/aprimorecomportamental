import React, { useRef } from 'react'
import {
  StyledCloseSidebarIcon,
  StyledSidebar,
  StyledSidebarMenu,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'
import { useOnClickOutside } from '../../helpers/customHooks'
import { Section } from '../../consts'

type Props = {
  toggleSidebar: () => void
}

const Sidebar: React.FC<Props> = ({ toggleSidebar }: Props) => {
  const sidebarRef = useRef(null)
  useOnClickOutside(sidebarRef, toggleSidebar)
  return (
    <StyledSidebar ref={sidebarRef}>
      <StyledCloseSidebarIcon
        onClick={toggleSidebar}
        aria-label='Close sidebar menu'
      >
        <FontAwesomeIcon icon={faTimes} aria-hidden='true' />
      </StyledCloseSidebarIcon>
      <StyledSidebarMenu>
        <MenuItem
          href={`#${Section.AboutMe}`}
          title='Quem somos'
          onClick={toggleSidebar}
        />
        <MenuItem
          href={`#${Section.Skills}`}
          title='Especialidades'
          onClick={toggleSidebar}
        />
        {/* <MenuItem href={`#${Section.Projects}`} title="Contato" onClick={toggleSidebar} /> */}
      </StyledSidebarMenu>
    </StyledSidebar>
  )
}

export default Sidebar

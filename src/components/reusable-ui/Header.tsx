import React from "react"
import styled from "styled-components"
import { theme } from "../../theme/theme"

// Method 1
type HeaderProps = {
  children: React.ReactNode
  pokemon:string
}

// Method 2 PropsWithChildren
// type HeaderProps = PropsWithChildren & {
//   pokemon: string
// } 

export default function Header({ children, pokemon }: HeaderProps) {
  if(pokemon) return <div>GoodBye</div>
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`

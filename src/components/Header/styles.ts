import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;

  div.action-header-container {
    display: flex;
    gap: 0.5rem;
  }
`

export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
`

export const LightPurpleAction = styled(HeaderAction)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.2rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const LightYellowAction = styled(HeaderAction)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

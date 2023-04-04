import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
`

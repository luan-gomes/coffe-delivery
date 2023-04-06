import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  padding: 5.75rem 0;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-size: 3rem;
    font-style: normal;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  div.item-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.25rem;
  }
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div.icon-container {
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.icon-container.yellow-dark {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
  div.icon-container.yellow {
    background-color: ${(props) => props.theme.yellow};
  }
  div.icon-container.black {
    background-color: ${(props) => props.theme['base-text']};
  }
  div.icon-container.purple {
    background-color: ${(props) => props.theme.purple};
  }
`

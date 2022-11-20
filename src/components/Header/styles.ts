import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0rem;
  z-index: 10;
  padding: 2.0625rem 10rem;
  background: ${(props) => props.theme.background};
  flex-direction: row;
  & > div {
    justify-content: space-between;
    display: flex;
    width: 70rem;
    margin: 0 auto;
    img {
      height: 2.5rem;
      width: 5.3rem;
    }
  }
`

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;

  span {
    border-radius: 6px;
    padding: 0.625rem 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  a {
    border-radius: 6px;
    padding: 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    position: relative;

    span[id='shopping-cart'] {
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      width: 1.25rem;
      height: 1.25rem;
      position: absolute;
      right: -0.5rem;
      top: -0.5rem;
      font-weight: bold;
      font-size: 0.75rem;
      border-radius: 100%;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
  }
`

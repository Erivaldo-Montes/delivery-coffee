import styled from 'styled-components'

interface SuccessContainerProps {
  headerHeight: number
}

export const SuccessContainer = styled.div<SuccessContainerProps>`
  display: flex;
  position: relative;
  justify-content: space-between;
  top: ${(props) => props.headerHeight + 'px'};
  width: 70rem;
  margin: 5.25rem auto;
`

export const SuccessInfoContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    font-size: 2rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const DeliveryInfoContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 1rem;
  padding: 2.5rem;
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 36px 6px 36px;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background: linear-gradient(
      to right,
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.purple}
    );
    inset: -1px;
    border-radius: 6px 36px 6px 36px;
  }
  span {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      svg {
        color: ${(props) => props.theme.background};
      }
    }

    div[id='address-delivery-span'] {
      background-color: ${(props) => props.theme.purple};
    }

    div[id='estimated-time'] {
      background-color: ${(props) => props.theme.yellow};
    }

    div[id='currency-dollar'] {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

import styled from 'styled-components'

interface HomeContainerProps {
  headerHeight: number
}

export const Container = styled.div<HomeContainerProps>`
  position: relative;
  top: ${(props) => props.headerHeight + 'px'};
  max-width: 70rem;
  margin: 0 auto;
`

export const PresentationContainer = styled.div`
  display: flex;
  padding: 5.875rem 0 6.75rem 0;
  gap: 3.5rem;
  width: 100%;

  div {
    h1 {
      color: ${(props) => props.theme['base-title']};
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      font-weight: 800;
    }

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};

      font-weight: 400;
      margin-top: 1rem;
    }

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1.125rem;
      margin-top: 4.125rem;

      span {
        display: flex;

        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
      }

      span svg {
        border-radius: 50%;
        padding: 0.5rem;
        box-sizing: content-box;
      }

      span:nth-child(1) svg {
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.background};
      }

      span:nth-child(2) svg {
        background: ${(props) => props.theme['base-title']};
        color: ${(props) => props.theme.background};
      }

      span:nth-child(3) svg {
        background: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.background};
      }

      span:nth-child(4) svg {
        background: ${(props) => props.theme.purple};
        color: ${(props) => props.theme.background};
      }
    }
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const ListCoffeeContainer = styled.div`
  margin-top: 2rem;
  & > div {
    margin-top: 3.375rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem;
  }
`

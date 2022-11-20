import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
`

export const CoffeeCheckoutContainer = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;

  font-size: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 1rem;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  div[id='actions-coffee'] {
    display: flex;
    margin-top: 0.5rem;
    gap: 0.5rem;

    button {
      display: flex;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.6;
      padding: 0.4rem;
      height: 2rem;
      align-items: center;
      justify-content: center;
      gap: 0.125rem;
      background: ${(props) => props.theme['base-button']};
      border: none;
      border-radius: 6px;

      transition: 100ms background;

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`

import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  max-width: 16rem;
  justify-content: center;
  align-items: center;

  padding: 0 1.25rem 1.25rem 1.25rem;

  border-radius: 6px 36px 6px 36px;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeVariantsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  span {
    border-radius: 100px;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  margin-top: 2.06rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  p {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-text']};

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button[type='button'] {
      border: none;
      color: ${(props) => props.theme['base-card']};
      background: ${(props) => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;
      line-height: 0;

      transition: 100ms background;

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`

import styled from 'styled-components'

export const InputCoffeeAmoutContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-button']};
  width: 4.5rem !important;
  height: 2rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    width: 100%;
    background: ${(props) => props.theme['base-button']};
    border: none;
    text-align: center;
    &:focus {
      box-shadow: none;
    }
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`

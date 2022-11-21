import styled from 'styled-components'

export const DeliveryAddressFormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.3rem;
  border-radius: 6px;

  span {
    display: flex;
    width: 100%;
    gap: 0.5rem;

    svg[id='mapPin'] {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      p {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  div[id='form_inputs'] {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 12.5rem auto 3.75rem;
    width: 100%;
    gap: 0.75rem;
    margin-top: 2rem;

    input[id='CEP'] {
      grid-area: CEP;
    }

    input[id='street'] {
      grid-area: street;
    }

    input[id='district'] {
      grid-area: district;
    }

    input[id='number'] {
      grid-area: number;
    }

    input[id='complement'] {
      grid-area: complement;
    }
    select[id='federal_unit'] {
      grid-area: federal_unit;
    }

    input[id='city'] {
      grid-area: city;
    }

    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
    grid-template-areas:
      'CEP . .'
      'street street street'
      'number complement complement'
      'district city federal_unit';
  }
`

interface InputDeliveryProps {
  isInvalid: boolean
}

export const InputDelivery = styled.input<InputDeliveryProps>`
  background: ${(props) => props.theme['base-input']};
  border: ${(props) => {
    if (props.isInvalid) {
      return '1px solid red'
    } else {
      return 'none'
    }
  }};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;
`
export const SelectDelivaryContainer = styled.select<InputDeliveryProps>`
  -webkit-appearance: none !important;
  background: ${(props) => props.theme['base-input']};
  border: ${(props) => {
    if (props.isInvalid) {
      return '1px solid red'
    } else {
      return 'none'
    }
  }};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;

  color: ${(props) => props.theme['base-label']};
`

import styled from 'styled-components'

interface CheckoutContainerProps {
  headerHeight: number
}

interface MethodPaymentButtonProps {
  selected: boolean
}

interface PaymentMethodProps {
  paymentMethodIsSelected: boolean
}

export const CheckoutContainer = styled.div<CheckoutContainerProps>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 40rem 28rem;
  width: 100%;
  padding: 0 10rem;
  top: ${(props) => props.headerHeight + 'px'};
  gap: 2rem;

  position: absolute;
  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 1.125rem;
  }
  div {
    width: 100%;
  }
`

export const PaymentMethod = styled.div<PaymentMethodProps>`
  border: ${(props) => {
    if (!props.paymentMethodIsSelected) {
      return '1px solid red'
    } else {
      return 'none'
    }
  }};

  margin-top: 0.75rem;
  border-radius: 6px;
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  span {
    display: flex;
    width: 100%;
    gap: 0.5rem;

    svg[id='currencyDollar'] {
      color: ${(props) => props.theme.purple};
    }

    div {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      p {
        margin-bottom: 0.125rem;
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`

export const PaymentMethodList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const MethodPaymentButton = styled.button<MethodPaymentButtonProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 0.75rem !important;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
  border-radius: 6px;
  gap: 0.75rem;

  background: ${(props) => {
    if (props.selected) {
      return props.theme['base-button']
    } else {
      return props.theme['purple-light']
    }
  }};

  border: ${(props) => {
    if (props.selected) {
      return '1px solid ' + props.theme.purple
    } else {
      return 'none'
    }
  }};

  transition: 100ms background;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectedMethodPayment = styled(MethodPaymentButton)`
  border: 1px solid ${(props) => props.theme.purple};
  background: ${(props) => props.theme['purple-light']};
`

export const OrdersContainer = styled.aside`
  & > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 1.125rem;
  }

  & > div {
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
  }
`
export const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 6px 44px 6px 44px;

  table {
    border-spacing: 0 0.75rem;
    font-size: 0.875rem;
    width: 100%;

    tr {
      margin-top: 0.75rem;
    }

    tr td:nth-child(2) {
      text-align: right;
    }

    tr:nth-child(3) {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  & > button {
    background: ${(props) => props.theme.yellow};
    padding: 0.75rem 0.5rem 0.75rem 0.5rem;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border: none;
    border: 6px;
    border-radius: 6px;
    transition: 100ms background;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

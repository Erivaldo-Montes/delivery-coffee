import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import success from '../../assets/success_ilustration.svg'
import { CoffeeContext } from '../../context/coffeeContext'
import { HeaderContext } from '../../context/headerContext'
import {
  SuccessContainer,
  SuccessInfoContainer,
  DeliveryInfoContainer,
} from './styles'

enum MethyodPaymentSuccess {
  CREDIT_CARD = 'cartão de crédito',
  CASH = 'dinheiro',
  DEBIT_CARD = 'cartão de debito',
}
export function Success() {
  const { headerHeight } = useContext(HeaderContext)
  const { deliveryCoffee } = useContext(CoffeeContext)
  return (
    <SuccessContainer headerHeight={headerHeight}>
      <SuccessInfoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <DeliveryInfoContainer>
          <span>
            <div id="address-delivery-span">
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {deliveryCoffee.address.street},{' '}
                  {deliveryCoffee.address.number}
                </strong>
              </p>

              <p>
                {deliveryCoffee.address.district} -{' '}
                {deliveryCoffee.address.city},{' '}
                {deliveryCoffee.address.federal_unit}
              </p>
            </div>
          </span>
          <span>
            <div id="estimated-time">
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega </p>
              <strong>20 min - 30 min</strong>
            </div>
          </span>
          <span>
            <div id="currency-dollar">
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <strong>
                {MethyodPaymentSuccess[deliveryCoffee.paymentMethod]}
              </strong>
            </div>
          </span>
        </DeliveryInfoContainer>
      </SuccessInfoContainer>
      <img src={success} alt="" />
    </SuccessContainer>
  )
}

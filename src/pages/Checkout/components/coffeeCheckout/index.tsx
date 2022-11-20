import { Trash } from 'phosphor-react'
import { useContext } from 'react'

import { InputCoffeeAmount } from '../../../../components/inputCoffeeAmout'
import { CoffeeContext } from '../../../../context/coffeeContext'
import {
  CoffeesOrder,
  removeOrderAction,
  updateCoffeeAmountAction,
} from '../../../../reducer/coffee/action'
import { CoffeeCheckoutContainer, CoffeeInfo, Container } from './styles'

interface CoffeeCheckoutProps {
  coffeeOrder: CoffeesOrder
}

export function CofeeCheckout({ coffeeOrder }: CoffeeCheckoutProps) {
  const { coffeeOrderDispatch } = useContext(CoffeeContext)
  function changeCofeeAmount(amount: number): void {
    coffeeOrderDispatch(updateCoffeeAmountAction({ ...coffeeOrder, amount }))
  }

  function removeOrder() {
    coffeeOrderDispatch(removeOrderAction(coffeeOrder.id))
  }

  return (
    <Container>
      <CoffeeCheckoutContainer>
        <CoffeeInfo>
          <img src={coffeeOrder.imageURL} alt="" />
          <div>
            {coffeeOrder.name}
            <div id="actions-coffee">
              <InputCoffeeAmount
                coffeeAmount={coffeeOrder.amount}
                onChangeCoffeeAmount={changeCofeeAmount}
              />
              <button onClick={removeOrder}>
                <Trash size={16} /> REMOVER
              </button>
            </div>
          </div>
        </CoffeeInfo>
        <p>R&#36;{coffeeOrder.price.toFixed(2)}</p>
      </CoffeeCheckoutContainer>
    </Container>
  )
}

import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent } from 'react'

import { InputCoffeeAmoutContainer } from './styled'

interface InputCoffeeAmountProps {
  coffeeAmount: number
  onChangeCoffeeAmount: (amount: number) => void
}

export function InputCoffeeAmount({
  onChangeCoffeeAmount,
  coffeeAmount,
}: InputCoffeeAmountProps) {
  function subCoffeeAmount() {
    if (coffeeAmount > 0) {
      onChangeCoffeeAmount(coffeeAmount - 1)
    }
  }

  function addCoffeeAmount() {
    onChangeCoffeeAmount(coffeeAmount + 1)
  }

  function handleInputCoffeeAmount(e: ChangeEvent<InputEvent>) {
    onChangeCoffeeAmount(e.target.value)
  }
  return (
    <InputCoffeeAmoutContainer>
      <Minus size={20} weight="bold" onClick={subCoffeeAmount} />
      <input
        type="number"
        value={coffeeAmount}
        onChange={handleInputCoffeeAmount}
      />
      <Plus size={20} weight="bold" onClick={addCoffeeAmount} />
    </InputCoffeeAmoutContainer>
  )
}

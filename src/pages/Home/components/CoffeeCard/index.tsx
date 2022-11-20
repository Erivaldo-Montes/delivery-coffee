import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  BuyContainer,
  CoffeeVariantsContainer,
} from './styles'

import { InputCoffeeAmount } from '../../../../components/inputCoffeeAmout'
import { Coffee, CoffeeContext } from '../../../../context/coffeeContext'
import React, { useContext, useState } from 'react'
import { addNewCoffeeOrderAction } from '../../../../reducer/coffee/action'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard(props: CoffeeCardProps) {
  const [coffeeAmount, setCoffeeAmount] = useState<number>(0)
  const { coffeeOrderDispatch } = useContext(CoffeeContext)

  function handleBuyCoffee(): void {
    if (coffeeAmount > 0) {
      coffeeOrderDispatch(
        addNewCoffeeOrderAction({ ...props.coffee, amount: coffeeAmount }),
      )
    }
  }

  function upadteCoffeeAmount(amount: number): void {
    setCoffeeAmount(amount)
  }

  return (
    <CoffeeCardContainer>
      <img src={props.coffee.imageURL} alt="" />

      <CoffeeVariantsContainer>
        {props.coffee.tags.map((tag) => {
          return <span key={tag}>{tag.toUpperCase()}</span>
        })}
      </CoffeeVariantsContainer>
      <h2>{props.coffee.name}</h2>
      <p>{props.coffee.description}</p>

      <BuyContainer>
        <p>
          <span>R&#36; </span>
          {props.coffee.price.toFixed(2)}
        </p>
        <form action="">
          <InputCoffeeAmount
            coffeeAmount={coffeeAmount}
            onChangeCoffeeAmount={upadteCoffeeAmount}
          />

          <button type="button" onClick={handleBuyCoffee}>
            <ShoppingCart size={19} weight="fill" />
          </button>
        </form>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}

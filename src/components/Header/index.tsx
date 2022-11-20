import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, ActionContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../context/coffeeContext'

export function Header() {
  const { coffeesOrders } = useContext(CoffeeContext)

  const coffeeOrdersLength = coffeesOrders.length

  useEffect(() => {
    const headerH = document.querySelector('main-header')
  }, [])

  return (
    <HeaderContainer id="main-header">
      <div>
        <img
          src={logo}
          alt="copo de cafe com as palavras 'coffee delivery' escrito na frente"
        />

        <ActionContainer>
          <span>
            <MapPin size={22} weight="fill" />
            porto alegre
          </span>

          <NavLink to={'/checkout'}>
            {coffeeOrdersLength > 0 ? (
              <span id="shopping-cart">{coffeeOrdersLength}</span>
            ) : null}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ActionContainer>
      </div>
    </HeaderContainer>
  )
}

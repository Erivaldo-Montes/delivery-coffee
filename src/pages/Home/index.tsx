import { Container, PresentationContainer, ListCoffeeContainer } from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import coffeeCup from '../../assets/coffee-cup.svg'
import { CoffeeCard } from './components/CoffeeCard'
import { useContext } from 'react'
import { HeaderContext } from '../../context/headerContext'
import { CoffeeContext } from '../../context/coffeeContext'

export function Home() {
  const { headerHeight } = useContext(HeaderContext)
  const { coffeeMenu, coffeesOrders } = useContext(CoffeeContext)

  return (
    <Container headerHeight={headerHeight}>
      <main>
        <PresentationContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <div>
              <span>
                <ShoppingCart size={16} weight="fill" />
                Compra simples e segura
              </span>
              <span>
                <Package size={16} weight="fill" />
                Embalagem mantém o café intacto
              </span>
              <span>
                <Timer size={16} weight="fill" />
                Entrega rápida e rastreada
              </span>
              <span>
                <Coffee size={16} weight="fill" />O café chega fresquinho até
                você
              </span>
            </div>
          </div>
          <img src={coffeeCup} alt="copo de café com alguns grãos em volta" />
        </PresentationContainer>
        <ListCoffeeContainer>
          <h2>Nossos cafés</h2>
          <div>
            {coffeeMenu.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffee={coffee} />
            })}
          </div>
        </ListCoffeeContainer>
      </main>
    </Container>
  )
}

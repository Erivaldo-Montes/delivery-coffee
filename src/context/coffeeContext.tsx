import React, {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { CoffeesOrder, resetOrdersAction } from '../reducer/coffee/action'

import tradicionalEspresso from '../assets/coffeeTypes/traditional_express.svg'
import americanExpress from '../assets/coffeeTypes/american_express.svg'
import creamyExpress from '../assets/coffeeTypes/creamy_express.svg'
import icedExpress from '../assets/coffeeTypes/iced_express.svg'
import coffeeWithMilk from '../assets/coffeeTypes/coffee_with_milk.svg'
import latte from '../assets/coffeeTypes/latte.svg'
import capuccino from '../assets/coffeeTypes/capuccino.svg'
import macchiato from '../assets/coffeeTypes/macchiato.svg'
import macaccino from '../assets/coffeeTypes/mocaccino.svg'
import hotChocolate from '../assets/coffeeTypes/hot_chocolate.svg'
import cuban from '../assets/coffeeTypes/cuban.svg'
import hawaiinan from '../assets/coffeeTypes/hawaiian.svg'
import arabic from '../assets/coffeeTypes/arabic.svg'
import irish from '../assets/coffeeTypes/irish.svg'

import { coffeeReducer } from '../reducer/coffee/reducer'
import {
  DeliveryCoffee,
  deliveryCoffeeReducer,
} from '../reducer/deliveryCoffee/reducer'
import { completeOrderAction } from '../reducer/deliveryCoffee/action'

enum tagsTypeEnum {
  'tradicional',
  'com leite',
  'gelado',
  'especial',
  'alcoólico',
}

type tagsType = keyof typeof tagsTypeEnum

export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  tags: tagsType[]
  imageURL: string
}

export const coffeeMenu: Coffee[] = [
  {
    id: String(Math.random() * 1000),
    name: 'expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 6.9,
    tags: ['tradicional'],
    imageURL: tradicionalEspresso,
  },
  {
    id: String(Math.random() * 1000),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageURL: americanExpress,
    price: 5.9,
    tags: ['tradicional'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imageURL: creamyExpress,
    price: 7.9,
    tags: ['tradicional'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageURL: icedExpress,
    price: 12.9,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageURL: coffeeWithMilk,
    price: 10.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageURL: latte,
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageURL: capuccino,
    price: 12.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageURL: macchiato,
    price: 6.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Macaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imageURL: macaccino,
    price: 8.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageURL: hotChocolate,
    price: 13.9,
    tags: ['especial', 'com leite'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageURL: cuban,
    price: 15.9,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageURL: hawaiinan,
    price: 13.9,
    tags: ['especial'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageURL: arabic,
    price: 16.9,
    tags: ['especial'],
  },
  {
    id: String(Math.random() * 1000),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageURL: irish,
    price: 17.9,
    tags: ['especial', 'alcoólico'],
  },
]

const federalUnitsOption = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MG',
  'MS',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

export interface Address {
  CEP: number
  street: string
  city: string
  number: number
  complement?: string
  district: string
  federal_unit: string
}

interface CoffeeContextContext {
  coffeeMenu: Coffee[]
  coffeeOrderDispatch: React.Dispatch<any>
  coffeesOrders: CoffeesOrder[]
  sumOfOrders: number
  federalUnitsOption: string[]
  deliveryCoffee: DeliveryCoffee
  handleDeliveryCoffeeAdress: (address: Address, paymentMethod: string) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextContext)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesOrders, coffeeOrderDispatch] = useReducer(coffeeReducer, [])
  const [deliveryCoffee, deliveryCoffeeDispatch] = useReducer(
    deliveryCoffeeReducer,
    [],
  )

  const [sumOfOrders, setSumOfOrders] = useState(0)

  useEffect(() => {
    let sum = 0
    for (const order of coffeesOrders) {
      sum = order.price * order.amount + sum
    }

    setSumOfOrders(sum)
  }, [coffeesOrders])

  function handleDeliveryCoffeeAdress(address: Address, paymentMethod: string) {
    deliveryCoffeeDispatch(
      completeOrderAction({
        address,
        order: coffeesOrders,
        totalPrice: sumOfOrders,
        paymentMethod,
      }),
    )

    coffeeOrderDispatch(resetOrdersAction())
  }

  console.log(deliveryCoffee)

  return (
    <CoffeeContext.Provider
      value={{
        coffeeMenu,
        coffeeOrderDispatch,
        coffeesOrders,
        sumOfOrders,
        federalUnitsOption,
        deliveryCoffee,
        handleDeliveryCoffeeAdress,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

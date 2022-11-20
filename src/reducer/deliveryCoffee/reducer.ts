import { Address } from '../../context/coffeeContext'
import { CoffeesOrder } from '../coffee/action'
import { deliveryCoffeeActionTypes } from './action'

export interface DeliveryCoffee {
  address: Address
  order: CoffeesOrder[]
  totalPrice: number
  paymentMethod: string
}

export function deliveryCoffeeReducer(state: DeliveryCoffee, action: any) {
  switch (action.type) {
    case deliveryCoffeeActionTypes.COMPLETE_ORDER:
      return { ...action.payload.delivery }

    default:
      return state
  }
}

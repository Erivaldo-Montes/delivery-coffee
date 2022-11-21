import { Coffee } from '../../context/coffeeContext'

export interface CoffeesOrder extends Coffee {
  amount: number
}

export enum coffeeActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
  UPDATE_COFFEE_AMOUNT = 'UPDATE_COFFEE_AMOUNT',
  SUM_OF_ORDERS = 'SUM_OF_ORDERS',
  COMPLETE_ORDER = 'COMPLETE_ORDER',
  RESET_ORDERS = 'RESET_ORDERS',
}

export function addNewCoffeeOrderAction(coffeeOrder: CoffeesOrder) {
  return {
    type: coffeeActionTypes.ADD_NEW_ORDER,
    payload: {
      coffeeOrder,
    },
  }
}

export function updateCoffeeAmountAction(coffeeOrder: CoffeesOrder) {
  return {
    type: coffeeActionTypes.UPDATE_COFFEE_AMOUNT,
    payload: {
      coffeeOrder,
    },
  }
}

export function removeOrderAction(id: string) {
  return {
    type: coffeeActionTypes.REMOVE_ORDER,
    payload: {
      id,
    },
  }
}

export function resetOrdersAction() {
  return {
    type: coffeeActionTypes.RESET_ORDERS,
  }
}

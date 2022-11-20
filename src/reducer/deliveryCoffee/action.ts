import { DeliveryCoffee } from './reducer'

export enum deliveryCoffeeActionTypes {
  COMPLETE_ORDER = 'COMPLETE_ORDER',
}

export function completeOrderAction(delivery: DeliveryCoffee) {
  return {
    type: deliveryCoffeeActionTypes.COMPLETE_ORDER,
    payload: {
      delivery,
    },
  }
}

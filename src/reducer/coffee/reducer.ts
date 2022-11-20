import { CoffeesOrder, coffeeActionTypes } from './action'

export function coffeeReducer(
  state: CoffeesOrder[],
  action: any,
): CoffeesOrder[] {
  switch (action.type) {
    case coffeeActionTypes.ADD_NEW_ORDER: {
      const orderAlreadyexists = state.find(
        (order) => order.name === action.payload.coffeeOrder.name,
      )

      if (orderAlreadyexists) {
        const sumTotal =
          orderAlreadyexists.amount + action.payload.coffeeOrder.amount

        const stateWithoutOrderAction = state.filter(
          (order) => order.name !== action.payload.coffeeOrder.name,
        )
        return [
          ...stateWithoutOrderAction,
          {
            ...action.payload.coffeeOrder,
            amount: sumTotal,
          },
        ]
      } else {
        return [...state, action.payload.coffeeOrder]
      }
    }

    case coffeeActionTypes.UPDATE_COFFEE_AMOUNT: {
      const stateWithoutOrderAction = state.filter(
        (order) => order.name !== action.payload.coffeeOrder.name,
      )

      return [...stateWithoutOrderAction, action.payload.coffeeOrder]
    }

    case coffeeActionTypes.REMOVE_ORDER: {
      const stateWithoutOrderAction = state.filter(
        (order) => order.id !== action.payload.id,
      )

      return [...stateWithoutOrderAction]
    }

    default:
      return state
  }
}

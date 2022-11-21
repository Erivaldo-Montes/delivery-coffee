import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../context/coffeeContext'
import { HeaderContext } from '../../context/headerContext'
import { CofeeCheckout } from './components/coffeeCheckout'
import { DeliveryAddressForm } from './components/deliveryAddressForm'
import { Navigate } from 'react-router-dom'
import {
  CheckoutContainer,
  BillContainer,
  PaymentMethod,
  OrdersContainer,
  PaymentMethodList,
  MethodPaymentButton,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'

const deliveryAdreessFormValidationSchema = zod.object({
  CEP: zod.number().min(1, 'cep inválido'),
  street: zod.string().min(1, 'informe seu rua'),
  number: zod.number().min(1, 'Informe o número da sua rua'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe seu bairro'),
  city: zod.string().min(1, 'Informe sua cidade'),
  federal_unit: zod.string().length(2, 'Informe seu Estado'),
})

type DeliveryAddressFormData = zod.infer<
  typeof deliveryAdreessFormValidationSchema
>

enum PaymentMethodOptions {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  CASH = 'CASH',
}

type paymentTypes = keyof typeof PaymentMethodOptions

export function Checkout() {
  const { headerHeight } = useContext(HeaderContext)
  const { coffeesOrders, sumOfOrders, handleDeliveryCoffeeAdress } =
    useContext(CoffeeContext)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paymentMethodIsSelected, setPaymentMethodIsSelected] = useState(true)
  const [deliveryIsOk, setDeliveryIsOk] = useState(false)

  const shipping = 9.99

  const deliveryAddressForm = useForm<DeliveryAddressFormData>({
    resolver: zodResolver(deliveryAdreessFormValidationSchema),
  })

  const { handleSubmit } = deliveryAddressForm

  function handlePaymentMethodSelected(method: paymentTypes) {
    setPaymentMethod(method)
  }

  function handlecomfirmOrder(data: DeliveryAddressFormData) {
    if (coffeesOrders.length === 0) {
      alert('Seu Carrinhos está vazio')
    } else if (paymentMethod && coffeesOrders.length > 0) {
      handleDeliveryCoffeeAdress(data, paymentMethod)
      setDeliveryIsOk(true)
    } else if (!paymentMethod) {
      setPaymentMethodIsSelected(false)
    }
  }

  return (
    <CheckoutContainer headerHeight={headerHeight}>
      <div>
        <h3>Complete seu pedido</h3>
        <FormProvider {...deliveryAddressForm}>
          <DeliveryAddressForm />
        </FormProvider>
        <PaymentMethod paymentMethodIsSelected={paymentMethodIsSelected}>
          <span>
            <CurrencyDollar id="currencyDollar" size={22} />
            <div>
              <p>Pagemento</p>O pagamento é feito na entrega. Escolha a forma
              que deseja pagar
            </div>
          </span>
          <PaymentMethodList>
            {/* cartão de crédito */}
            <MethodPaymentButton
              selected={paymentMethod === PaymentMethodOptions.CREDIT_CARD}
              onClick={() =>
                handlePaymentMethodSelected(PaymentMethodOptions.CREDIT_CARD)
              }
            >
              <CreditCard size={16} />
              cartão de crédito
            </MethodPaymentButton>

            {/* cartão de débito */}
            <MethodPaymentButton
              selected={paymentMethod === PaymentMethodOptions.DEBIT_CARD}
              onClick={() =>
                handlePaymentMethodSelected(PaymentMethodOptions.DEBIT_CARD)
              }
            >
              <Bank size={16} />
              cartão de débito
            </MethodPaymentButton>

            {/* cash */}

            <MethodPaymentButton
              selected={paymentMethod === PaymentMethodOptions.CASH}
              onClick={() =>
                handlePaymentMethodSelected(PaymentMethodOptions.CASH)
              }
            >
              <Money size={16} />
              dinheiro
            </MethodPaymentButton>
          </PaymentMethodList>
        </PaymentMethod>
      </div>
      <OrdersContainer>
        <p>Cafés selecionados</p>
        <BillContainer>
          {coffeesOrders.map((order) => {
            return <CofeeCheckout coffeeOrder={order} key={order.id} />
          })}
          <table>
            <tr>
              <td>Total de items</td>
              <td>R&#36; {sumOfOrders.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Entegra</td>
              <td>R&#36; {shipping.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total a pagar</td>
              <td>
                R&#36; <span>{(sumOfOrders + shipping).toFixed(2)}</span>
              </td>
            </tr>
          </table>
          <button
            form="delivery-address"
            onClick={handleSubmit(handlecomfirmOrder)}
          >
            CONFIRMAR PEDIDO
            {deliveryIsOk ? <Navigate to={'/success'} /> : null}
          </button>
        </BillContainer>
      </OrdersContainer>
    </CheckoutContainer>
  )
}
